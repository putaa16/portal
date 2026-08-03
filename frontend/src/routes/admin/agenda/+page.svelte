<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fetchAPI, API_URL } from "$lib/api";
  import LexicalEditor from "$lib/components/LexicalEditor.svelte";
  import { toast } from "svelte-sonner";
  import { superForm } from "sveltekit-superforms";
  import { zod4 } from "sveltekit-superforms/adapters";
  import { z } from "zod";

  let agendas = $state<any[]>([]);
  let loading = $state(true);

  let isModalOpen = $state(false);
  let isSubmitting = $state(false);

  let editId = $state<number | null>(null);
  let existingFotoUrl = $state("");
  let fotoPreviewUrl = $state("");

  // Pagination & Filter States
  let search = $state("");
  let page = $state(1);
  let limit = $state(5);
  let totalItems = $state(0);
  let totalPages = $state(1);

  // File Compression States
  let isFileTooLarge = $state(false);
  let selectedFileSize = $state(0);
  let rawFile = $state<File | null>(null);
  let isCompressing = $state(false);

  // Zod validation schema
  const schema = z.object({
    judul: z.string()
      .trim()
      .min(1, "Judul agenda tidak boleh kosong")
      .min(5, "Judul agenda minimal harus terdiri dari 5 karakter"),
    tanggal: z.string().min(1, "Tanggal agenda tidak boleh kosong"),
    deskripsi: z.string()
      .trim()
      .min(1, "Deskripsi/isi agenda tidak boleh kosong")
      .refine(val => {
        const cleanText = val.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').trim();
        const hasMedia = val.includes('<img') || val.includes('<iframe') || val.includes('<video');
        return cleanText.length > 0 || hasMedia;
      }, "Deskripsi/isi agenda tidak boleh kosong"),
    foto: z.any().optional()
  }).superRefine((data, ctx) => {
    // Foto wajib diunggah untuk agenda baru
    if (!editId) {
      if (!data.foto) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Foto agenda wajib diunggah",
          path: ["foto"]
        });
        return;
      }
    }

    if (data.foto) {
      const file = data.foto as File;
      // Validasi ukuran (maksimal 5MB)
      if (file.size > 5 * 1024 * 1024) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Ukuran foto terlalu besar. Maksimal 5 MB.",
          path: ["foto"]
        });
      }
      // Validasi jenis file gambar
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Format file foto tidak didukung. Harap unggah file gambar (jpg, jpeg, png, webp, gif)",
          path: ["foto"]
        });
      }
    }
  });

  const { form, errors, enhance, reset } = superForm(
    {
      judul: "",
      tanggal: "",
      deskripsi: "",
      foto: null as File | null
    },
    {
      SPA: true,
      validators: zod4(schema),
      async onUpdate({ form: f }) {
        if (!f.valid) {
          const errorMsgs = Object.values(f.errors).flat().filter(Boolean);
          if (errorMsgs.length > 0) {
            toast.error(errorMsgs[0] as string);
          } else {
            toast.error("Mohon lengkapi seluruh kolom yang wajib diisi!");
          }
          return;
        }
        isSubmitting = true;

        try {
          const formData = new FormData();
          formData.append("judul", f.data.judul);
          formData.append("tanggal", f.data.tanggal);
          formData.append("deskripsi", f.data.deskripsi);
          if (f.data.foto) {
            formData.append("foto", f.data.foto);
          }

          if (editId) {
            await fetchAPI(`/admin/agenda/${editId}`, {
              method: "PUT",
              body: formData,
            });
            toast.success("Agenda berhasil diperbarui!");
          } else {
            await fetchAPI("/admin/agenda", {
              method: "POST",
              body: formData,
            });
            toast.success("Agenda berhasil ditambahkan!");
          }
          closeModal();
          loadData();
        } catch (error: any) {
          toast.error(error.message || "Gagal menyimpan agenda");
        } finally {
          isSubmitting = false;
        }
      }
    }
  );

  async function loadData() {
    loading = true;
    try {
      let url = `/agenda?page=${page}&limit=${limit}`;
      if (search.trim()) {
        url += `&search=${encodeURIComponent(search.trim())}`;
      }
      const resAgenda = await fetchAPI(url);

      if (resAgenda && resAgenda.data) {
        agendas = resAgenda.data;
        totalItems = resAgenda.total;
        totalPages = resAgenda.total_pages;
      } else {
        agendas = resAgenda || [];
        totalItems = agendas.length;
        totalPages = 1;
      }
    } catch (error) {
      console.error(error);
      toast.error("Gagal memuat data agenda");
    } finally {
      loading = false;
    }
  }

  function handleFilterChange() {
    page = 1;
    loadData();
  }

  let searchTimer: any;
  function handleSearchInput(e: any) {
    search = e.target.value;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      handleFilterChange();
    }, 300);
  }

  function handlePageChange(newPage: number) {
    if (newPage >= 1 && newPage <= totalPages) {
      page = newPage;
      loadData();
    }
  }

  onMount(() => {
    loadData();
  });

  onDestroy(() => {
    if (fotoPreviewUrl) {
      URL.revokeObjectURL(fotoPreviewUrl);
    }
  });

  function formatDateTimeLocal(dateString: string): string {
    if (!dateString) return "";
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return "";
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");
    return `${year}-${month}-${day}T${hours}:${minutes}`;
  }

  function openModal(agenda: any = null) {
    reset();
    if (fotoPreviewUrl) {
      URL.revokeObjectURL(fotoPreviewUrl);
      fotoPreviewUrl = "";
    }
    isFileTooLarge = false;
    selectedFileSize = 0;
    rawFile = null;
    isCompressing = false;

    if (agenda) {
      editId = agenda.id;
      $form.judul = agenda.judul;
      $form.tanggal = formatDateTimeLocal(agenda.tanggal);
      $form.deskripsi = agenda.deskripsi;
      existingFotoUrl = agenda.foto;
    } else {
      editId = null;
      $form.judul = "";
      $form.tanggal = "";
      $form.deskripsi = "";
      existingFotoUrl = "";
    }
    $form.foto = null;
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
    reset();
    if (fotoPreviewUrl) {
      URL.revokeObjectURL(fotoPreviewUrl);
      fotoPreviewUrl = "";
    }
  }

  function handleFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      rawFile = file;
      selectedFileSize = file.size;
      isFileTooLarge = file.size > 5 * 1024 * 1024;

      $form.foto = file;
      if (fotoPreviewUrl) {
        URL.revokeObjectURL(fotoPreviewUrl);
      }
      fotoPreviewUrl = URL.createObjectURL(file);
    }
  }

  function compressImage(file: File, maxDim: number, quality: number): Promise<File> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        const img = new Image();
        img.src = event.target.result;
        img.onload = () => {
          const canvas = document.createElement("canvas");
          let width = img.width;
          let height = img.height;

          if (width > maxDim || height > maxDim) {
            if (width > height) {
              height = Math.round((height * maxDim) / width);
              width = maxDim;
            } else {
              width = Math.round((width * maxDim) / height);
              height = maxDim;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (!ctx) {
            reject(new Error("Gagal membuat context canvas"));
            return;
          }
          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              if (blob) {
                const compressedFile = new File([blob], file.name.substring(0, file.name.lastIndexOf('.')) + ".jpg", {
                  type: "image/jpeg",
                  lastModified: Date.now(),
                });
                resolve(compressedFile);
              } else {
                reject(new Error("Gagal mengekspor blob"));
              }
            },
            "image/jpeg",
            quality
          );
        };
        img.onerror = (err) => reject(err);
      };
      reader.onerror = (err) => reject(err);
    });
  }

  async function compressImageLocally() {
    if (!rawFile) return;
    isCompressing = true;
    try {
      const compressed = await compressImage(rawFile, 1200, 0.8);
      $form.foto = compressed;
      selectedFileSize = compressed.size;
      isFileTooLarge = compressed.size > 5 * 1024 * 1024;
      if (fotoPreviewUrl) {
        URL.revokeObjectURL(fotoPreviewUrl);
      }
      fotoPreviewUrl = URL.createObjectURL(compressed);
      toast.success(`Gambar berhasil dikompres! Ukuran baru: ${(compressed.size / (1024 * 1024)).toFixed(2)} MB`);
    } catch (err) {
      console.error(err);
      toast.error("Gagal mengompres gambar");
    } finally {
      isCompressing = false;
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Apakah Anda yakin ingin menghapus agenda ini?")) return;
    try {
      await fetchAPI(`/admin/agenda/${id}`, {
        method: "DELETE",
      });
      toast.success("Agenda berhasil dihapus!");
      loadData();
    } catch (error: any) {
      toast.error(error.message || "Gagal menghapus agenda");
    }
  }

  function stripHTML(html: string) {
    if (!html) return '';
    return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  }
</script>

<svelte:head>
  <title>Manajemen Agenda - Admin Panel</title>
</svelte:head>

<div class="mb-6 flex justify-between items-center">
  <div>
    <h1 class="text-2xl font-bold text-slate-900">Daftar Agenda</h1>
    <p class="text-slate-500 text-sm mt-1">
      Kelola semua agenda kegiatan yang diselenggarakan.
    </p>
  </div>
  <button
    onclick={() => openModal()}
    class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm"
  >
    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M12 4v16m8-8H4"
      ></path></svg
    >
    Tambah Agenda
  </button>
</div>

<div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
  <!-- Filter & Search Panel -->
  <div class="bg-slate-50 p-4 border-b border-slate-200 grid grid-cols-1 sm:grid-cols-4 gap-4">
    <div class="relative sm:col-span-3">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
      </div>
      <input
        type="text"
        placeholder="Cari judul atau isi agenda..."
        value={search}
        oninput={handleSearchInput}
        class="block w-full pl-9 pr-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      />
    </div>

    <div class="sm:col-span-1">
      <select
        bind:value={limit}
        onchange={handleFilterChange}
        class="block w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={25}>25</option>
        <option value={50}>50</option>
        <option value={100}>100</option>
      </select>
    </div>
  </div>

  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-slate-200">
      <thead class="bg-slate-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Foto</th>
          <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Judul</th>
          <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Deskripsi</th>
          <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Tanggal Pelaksanaan</th>
          <th class="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase">Aksi</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-200">
        {#if loading}
          <tr>
            <td colspan="5" class="px-6 py-12 text-center text-slate-500">Memuat data...</td>
          </tr>
        {:else if agendas.length === 0}
          <tr>
            <td colspan="5" class="px-6 py-12 text-center text-slate-500">Belum ada agenda.</td>
          </tr>
        {:else}
          {#each agendas as agenda}
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap">
                {#if agenda.foto}
                  <img
                    src="{API_URL}{agenda.foto}"
                    alt="Foto Agenda"
                    class="h-12 w-16 object-cover rounded shadow-sm"
                  />
                {:else}
                  <div class="h-12 w-16 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-400 border border-slate-200">
                    No Img
                  </div>
                {/if}
              </td>
              <td class="px-6 py-4">
                <div class="text-sm font-medium text-slate-900 line-clamp-2" title={agenda.judul}>
                  {agenda.judul}
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="text-sm text-slate-500 line-clamp-2 max-w-xs" title={stripHTML(agenda.deskripsi)}>
                  {stripHTML(agenda.deskripsi)}
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                {new Date(agenda.tanggal).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit"
                })} WIB
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onclick={() => openModal(agenda)}
                  class="text-indigo-600 hover:text-indigo-900 mr-4"
                  >Edit</button
                >
                <button
                  onclick={() => handleDelete(agenda.id)}
                  class="text-red-600 hover:text-red-900">Hapus</button
                >
              </td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </div>
  <!-- Pagination Controls -->
  {#if totalPages > 1}
    <div class="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
      <div class="flex-1 flex justify-between sm:hidden">
        <button
          onclick={() => handlePageChange(page - 1)}
          disabled={page === 1}
          class="relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-50"
        >
          Sebelumnya
        </button>
        <button
          onclick={() => handlePageChange(page + 1)}
          disabled={page === totalPages}
          class="ml-3 relative inline-flex items-center px-4 py-2 border border-slate-300 text-sm font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 disabled:opacity-50"
        >
          Berikutnya
        </button>
      </div>
      <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p class="text-sm text-slate-700">
            Menampilkan halaman <span class="font-medium">{page}</span> dari <span class="font-medium">{totalPages}</span> (Total <span class="font-medium">{totalItems}</span> data)
          </p>
        </div>
        <div>
          <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
            <button
              onclick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50"
            >
              <span class="sr-only">Sebelumnya</span>
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            </button>
            
            {#each Array.from({ length: totalPages }) as _, idx}
              <button
                onclick={() => handlePageChange(idx + 1)}
                class="relative inline-flex items-center px-4 py-2 border text-sm font-medium {page === idx + 1 ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-slate-300 text-slate-550 hover:bg-slate-50'}"
              >
                {idx + 1}
              </button>
            {/each}

            <button
              onclick={() => handlePageChange(page + 1)}
              disabled={page === totalPages}
              class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-300 bg-white text-sm font-medium text-slate-500 hover:bg-slate-50 disabled:opacity-50"
            >
              <span class="sr-only">Berikutnya</span>
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  {/if}
</div>

<!-- Modal Form -->
{#if isModalOpen}
  <div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" aria-hidden="true" onclick={closeModal}></div>
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
      <div class="relative z-10 inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
        <form use:enhance method="POST" enctype="multipart/form-data">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-xl leading-6 font-semibold text-slate-900 mb-6 border-b pb-4" id="modal-title">
              {editId ? "Edit Agenda" : "Tambah Agenda Baru"}
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="col-span-2">
                <label for="judul" class="block text-sm font-medium text-slate-700">Judul Agenda</label>
                <input
                  type="text"
                  id="judul"
                  name="judul"
                  bind:value={$form.judul}
                  class="mt-1 block w-full border {$errors.judul ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-slate-300 focus:ring-indigo-500 focus:border-indigo-500'} rounded-lg px-3 py-2 shadow-sm focus:outline-none sm:text-sm"
                />
                {#if $errors.judul}
                  <p class="mt-1.5 text-xs text-red-500 font-medium">{$errors.judul}</p>
                {/if}
              </div>

              <div class="col-span-2">
                <label for="tanggal" class="block text-sm font-medium text-slate-700">Tanggal & Waktu Pelaksanaan</label>
                <input
                  type="datetime-local"
                  id="tanggal"
                  name="tanggal"
                  bind:value={$form.tanggal}
                  class="mt-1 block w-full border {$errors.tanggal ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : 'border-slate-300 focus:ring-indigo-500 focus:border-indigo-500'} rounded-lg px-3 py-2 shadow-sm focus:outline-none sm:text-sm bg-white"
                />
                {#if $errors.tanggal}
                  <p class="mt-1.5 text-xs text-red-500 font-medium">{$errors.tanggal}</p>
                {/if}
              </div>

              <div class="col-span-2">
                <label for="foto" class="block text-sm font-medium text-slate-700">Upload Foto Pendukung</label>
                {#if fotoPreviewUrl}
                  <div class="mt-2 mb-2">
                    <img src={fotoPreviewUrl} alt="Preview" class="h-32 rounded border border-slate-200 object-cover" />
                  </div>
                {:else if existingFotoUrl}
                  <div class="mt-2 mb-2">
                    <img src="{API_URL}{existingFotoUrl}" alt="Preview" class="h-32 rounded border border-slate-200 object-cover" />
                  </div>
                {/if}
                <input
                  type="file"
                  id="foto"
                  name="foto"
                  accept="image/*"
                  onchange={handleFileChange}
                  class="mt-1 block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-indigo-50 file:text-indigo-700
                    hover:file:bg-indigo-100 transition-colors
                  "
                />
                {#if isFileTooLarge}
                  <div class="mt-2.5 p-3 bg-amber-50 border border-amber-200 rounded-lg flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 animate-fade-in">
                    <div class="text-xs text-amber-800">
                      <p class="font-semibold">Ukuran file terlalu besar!</p>
                      <p>File terpilih: <span class="font-medium">{(selectedFileSize / (1024 * 1024)).toFixed(2)} MB</span> (Maksimum 5 MB).</p>
                    </div>
                    <button
                      type="button"
                      onclick={compressImageLocally}
                      disabled={isCompressing}
                      class="shrink-0 bg-amber-600 hover:bg-amber-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-sm transition-colors disabled:opacity-50"
                    >
                      {isCompressing ? "Mengompres..." : "Kompres Otomatis"}
                    </button>
                  </div>
                {/if}
                {#if $errors.foto}
                  <p class="mt-1.5 text-xs text-red-500 font-medium">{$errors.foto}</p>
                {/if}
              </div>

              <div class="col-span-2 relative">
                <label for="deskripsi" class="block text-sm font-medium text-slate-700 mb-1">Deskripsi/Detail Agenda</label>
                <LexicalEditor bind:value={$form.deskripsi} />
                <textarea name="deskripsi" class="absolute w-0 h-0 opacity-0 pointer-events-none" bind:value={$form.deskripsi}></textarea>
                {#if $errors.deskripsi}
                  <p class="mt-1.5 text-xs text-red-500 font-medium">{$errors.deskripsi}</p>
                {/if}
              </div>
            </div>
          </div>
          <div class="bg-slate-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-2xl border-t border-slate-200">
            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? "Menyimpan..." : "Simpan & Publikasikan"}
            </button>
            <button
              type="button"
              onclick={closeModal}
              class="mt-3 w-full inline-flex justify-center rounded-lg border border-slate-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition-colors"
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
{/if}
