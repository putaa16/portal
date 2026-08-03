<script lang="ts">
  import { onMount } from "svelte";
  import { fetchAPI, API_URL } from "$lib/api";
  import { toast } from "svelte-sonner";
  import { superForm } from "sveltekit-superforms";
  import { zod4 } from "sveltekit-superforms/adapters";
  import { z } from "zod";

  let akreditasis = $state<any[]>([]);
  let loading = $state(true);

  let isModalOpen = $state(false);
  let isSubmitting = $state(false);

  let editId = $state<number | null>(null);
  let existingFileUrl = $state("");
  let filePreviewUrl = $state("");
  let fileInputRef = $state<HTMLInputElement | null>(null);

  // File Compression States
  let isFileTooLarge = $state(false);
  let selectedFileSize = $state(0);
  let rawFile = $state<File | null>(null);
  let isCompressing = $state(false);

  // Zod validation schema
  const schema = z.object({
    judul: z.string()
      .trim()
      .min(1, "Judul dokumen tidak boleh kosong")
      .min(3, "Judul dokumen minimal harus terdiri dari 3 karakter"),
    jenis: z.enum(["foto", "dokumen"]),
    file: z.any().optional()
  }).superRefine((data, ctx) => {
    // File wajib diunggah untuk data baru
    if (!editId && !data.file) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Berkas dokumen/foto wajib diunggah",
        path: ["file"]
      });
    }

    if (data.file) {
      const file = data.file as File;
      if (data.jenis === "foto") {
        if (file.size > 5 * 1024 * 1024) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Ukuran foto terlalu besar. Maksimal 5 MB.",
            path: ["file"]
          });
        }
        const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
        if (!allowedTypes.includes(file.type)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Format file foto tidak didukung. Harap unggah file gambar (jpg, jpeg, png, webp, gif)",
            path: ["file"]
          });
        }
      } else {
        if (file.size > 10 * 1024 * 1024) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Ukuran dokumen terlalu besar. Maksimal 10 MB.",
            path: ["file"]
          });
        }
        const filename = file.name.toLowerCase();
        const allowedExts = [".pdf"];
        const ext = filename.substring(filename.lastIndexOf("."));
        if (!allowedExts.includes(ext)) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Format dokumen tidak didukung. Harap unggah berkas PDF (.pdf)",
            path: ["file"]
          });
        }
      }
    }
  });

  const { form, errors, enhance, reset, validateForm } = superForm(
    {
      judul: "",
      jenis: "foto" as "foto" | "dokumen",
      file: null as File | null
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
          formData.append("jenis", f.data.jenis);
          if (f.data.file) {
            formData.append("file", f.data.file);
          }

          let response;
          if (editId) {
            response = await fetchAPI(`/admin/akreditasi/${editId}`, {
              method: "PUT",
              body: formData
            });
            toast.success("Dokumen akreditasi berhasil diperbarui!");
          } else {
            response = await fetchAPI("/admin/akreditasi", {
              method: "POST",
              body: formData
            });
            toast.success("Dokumen akreditasi baru berhasil ditambahkan!");
          }

          closeModal();
          await loadData();
        } catch (error: any) {
          toast.error(error.message || "Gagal menyimpan data ke server");
        } finally {
          isSubmitting = false;
        }
      }
    }
  );

  async function loadData() {
    loading = true;
    try {
      akreditasis = await fetchAPI("/akreditasi");
    } catch (error) {
      console.error(error);
      toast.error("Gagal memuat data dari server");
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadData();
  });

  function openCreateModal() {
    editId = null;
    existingFileUrl = "";
    filePreviewUrl = "";
    isFileTooLarge = false;
    selectedFileSize = 0;
    rawFile = null;
    isCompressing = false;
    reset({
      data: {
        judul: "",
        jenis: "foto",
        file: null
      }
    });
    isModalOpen = true;
  }

  function openEditModal(item: any) {
    editId = item.id;
    existingFileUrl = item.file;
    filePreviewUrl = "";
    isFileTooLarge = false;
    selectedFileSize = 0;
    rawFile = null;
    isCompressing = false;
    reset({
      data: {
        judul: item.judul,
        jenis: item.jenis as "foto" | "dokumen",
        file: null
      }
    });
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
    editId = null;
    existingFileUrl = "";
    filePreviewUrl = "";
    isFileTooLarge = false;
    selectedFileSize = 0;
    rawFile = null;
    isCompressing = false;
    if (fileInputRef) fileInputRef.value = "";
  }

  function handleFileChange(e: Event) {
    const input = e.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      
      if ($form.jenis === "foto") {
        rawFile = file;
        selectedFileSize = file.size;
        isFileTooLarge = file.size > 5 * 1024 * 1024;
      } else {
        isFileTooLarge = false;
        rawFile = null;
      }

      $form.file = file;
      validateForm({ update: true });

      // Generate preview for image files
      if (file.type.startsWith("image/")) {
        filePreviewUrl = URL.createObjectURL(file);
      } else {
        filePreviewUrl = "";
      }
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
      $form.file = compressed;
      selectedFileSize = compressed.size;
      isFileTooLarge = compressed.size > 5 * 1024 * 1024;
      if (filePreviewUrl) {
        URL.revokeObjectURL(filePreviewUrl);
      }
      filePreviewUrl = URL.createObjectURL(compressed);
      validateForm({ update: true });
      toast.success(`Gambar berhasil dikompres! Ukuran baru: ${(compressed.size / (1024 * 1024)).toFixed(2)} MB`);
    } catch (err) {
      console.error(err);
      toast.error("Gagal mengompres gambar");
    } finally {
      isCompressing = false;
    }
  }

  // Handle jenis select change to validate again and reset file input
  function handleJenisChange() {
    $form.file = null;
    filePreviewUrl = "";
    isFileTooLarge = false;
    selectedFileSize = 0;
    rawFile = null;
    if (fileInputRef) fileInputRef.value = "";
    validateForm({ update: true });
  }

  async function handleDelete(id: number) {
    if (confirm("Apakah Anda yakin ingin menghapus dokumen akreditasi ini?")) {
      try {
        await fetchAPI(`/admin/akreditasi/${id}`, {
          method: "DELETE"
        });
        toast.success("Dokumen akreditasi berhasil dihapus!");
        await loadData();
      } catch (error: any) {
        toast.error(error.message || "Gagal menghapus data");
      }
    }
  }

  function getFileNameFromPath(path: string): string {
    if (!path) return "";
    return path.substring(path.lastIndexOf("/") + 1);
  }
</script>

<svelte:head>
  <title>Kelola Akreditasi - Admin Panel</title>
</svelte:head>

<div class="space-y-6">
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-bold text-slate-800 tracking-tight">Kelola Dokumen Akreditasi</h1>
      <p class="text-sm text-slate-500">Kelola dokumen atau foto bukti sertifikat akreditasi lembaga.</p>
    </div>
    <button
      onclick={openCreateModal}
      class="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-sm shadow-sm transition-colors cursor-pointer"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
      Tambah Dokumen
    </button>
  </div>

  <!-- Table list -->
  <div class="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
    {#if loading}
      <div class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
      </div>
    {:else if akreditasis.length === 0}
      <div class="text-center py-16 text-slate-500">
        <svg class="w-12 h-12 mx-auto text-slate-300 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
        <p class="font-medium text-slate-600">Belum ada dokumen akreditasi</p>
        <p class="text-xs text-slate-400 mt-1">Silakan klik tombol "Tambah Dokumen" untuk mulai menambahkan.</p>
      </div>
    {:else}
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-slate-50 border-b border-slate-200">
              <th class="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Judul Dokumen</th>
              <th class="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Jenis</th>
              <th class="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Berkas</th>
              <th class="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider">Tanggal Dibuat</th>
              <th class="px-6 py-4 text-xs font-bold uppercase text-slate-500 tracking-wider text-right">Aksi</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100">
            {#each akreditasis as item}
              <tr class="hover:bg-slate-50 transition-colors">
                <td class="px-6 py-4">
                  <span class="font-semibold text-slate-800 text-sm">{item.judul}</span>
                </td>
                <td class="px-6 py-4">
                  {#if item.jenis === 'foto'}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200">
                      Foto/Gambar
                    </span>
                  {:else}
                    <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                      PDF Dokumen
                    </span>
                  {/if}
                </td>
                <td class="px-6 py-4 max-w-xs truncate">
                  <a
                    href="{API_URL}{item.file}"
                    target="_blank"
                    class="text-blue-600 hover:text-blue-800 text-xs font-medium underline inline-flex items-center gap-1"
                  >
                    <svg class="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    {#if item.jenis === 'foto'}
                      Lihat Foto/Gambar
                    {:else}
                      Lihat Dokumen
                    {/if}
                  </a>
                </td>
                <td class="px-6 py-4 text-slate-500 text-xs">
                  {new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                </td>
                <td class="px-6 py-4 text-right space-x-2 whitespace-nowrap">
                  <button
                    onclick={() => openEditModal(item)}
                    class="text-blue-600 hover:text-blue-800 text-xs font-bold px-2.5 py-1.5 rounded-md hover:bg-blue-50 transition-all cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onclick={() => handleDelete(item.id)}
                    class="text-rose-600 hover:text-rose-800 text-xs font-bold px-2.5 py-1.5 rounded-md hover:bg-rose-50 transition-all cursor-pointer"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            {/each}
          </tbody>
        </table>
      </div>
    {/if}
  </div>
</div>

<!-- Modal Form -->
{#if isModalOpen}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm p-4 overflow-y-auto">
    <div class="bg-white rounded-2xl shadow-xl w-full max-w-lg border border-slate-100 flex flex-col max-h-[90vh]">
      <!-- Header -->
      <div class="px-6 py-4 border-b border-slate-100 flex justify-between items-center">
        <h3 class="text-lg font-bold text-slate-800">
          {editId ? 'Edit Dokumen Akreditasi' : 'Tambah Dokumen Akreditasi'}
        </h3>
        <button
          onclick={closeModal}
          class="p-1 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-all"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
      </div>

      <!-- Form Content -->
      <form use:enhance method="POST" class="p-6 space-y-4 overflow-y-auto flex-1">
        <!-- Judul -->
        <div class="space-y-1">
          <label for="judul" class="block text-sm font-semibold text-slate-700">Judul Dokumen <span class="text-rose-500">*</span></label>
          <input
            id="judul"
            type="text"
            bind:value={$form.judul}
            class="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-slate-400"
            placeholder="Masukkan judul sertifikat/akreditasi..."
          />
          {#if $errors.judul}
            <span class="text-xs text-rose-600 block">{$errors.judul}</span>
          {/if}
        </div>

        <!-- Jenis -->
        <div class="space-y-1">
          <label for="jenis" class="block text-sm font-semibold text-slate-700">Jenis Dokumen <span class="text-rose-500">*</span></label>
          <select
            id="jenis"
            bind:value={$form.jenis}
            onchange={handleJenisChange}
            class="w-full px-3.5 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
          >
            <option value="foto">Foto / Gambar (Sertifikat)</option>
            <option value="dokumen">Dokumen (PDF)</option>
          </select>
          {#if $errors.jenis}
            <span class="text-xs text-rose-600 block">{$errors.jenis}</span>
          {/if}
        </div>

        <!-- File Upload -->
        <div class="space-y-2">
          <label for="file" class="block text-sm font-semibold text-slate-700">
            Unggah Berkas <span class="text-rose-500">{editId ? '' : '*'}</span>
          </label>
          <input
            id="file"
            type="file"
            bind:this={fileInputRef}
            onchange={handleFileChange}
            accept={$form.jenis === 'foto' ? 'image/*' : '.pdf'}
            class="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 file:hover:bg-blue-100 transition-colors file:cursor-pointer cursor-pointer border border-slate-200 rounded-lg p-1.5"
          />
          <p class="text-xs text-slate-400 mt-1">
            {#if $form.jenis === 'foto'}
              Mendukung file gambar (JPG, JPEG, PNG, WEBP, GIF). Ukuran maks 5 MB.
            {:else}
              Hanya mendukung format berkas PDF (.pdf). Ukuran maks 10 MB.
            {/if}
          </p>
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
          {#if $errors.file}
            <span class="text-xs text-rose-600 block">{$errors.file}</span>
          {/if}

          <!-- Existing file preview / path -->
          {#if editId && existingFileUrl && !$form.file}
            <div class="mt-2 text-xs bg-slate-50 border border-slate-100 rounded-lg p-2.5 flex items-center justify-between">
              <span class="text-slate-600 truncate max-w-[200px]" title={getFileNameFromPath(existingFileUrl)}>
                File Aktif: {getFileNameFromPath(existingFileUrl)}
              </span>
              <a
                href="{API_URL}{existingFileUrl}"
                target="_blank"
                class="text-blue-600 hover:text-blue-800 font-bold"
              >
                Lihat file saat ini
              </a>
            </div>
          {/if}

          <!-- New File Image Preview -->
          {#if filePreviewUrl}
            <div class="mt-3 relative w-full h-40 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center p-2">
              <img src={filePreviewUrl} alt="Preview Unggahan" class="max-h-full max-w-full object-contain rounded" />
            </div>
          {/if}
        </div>

        <!-- Footer Buttons -->
        <div class="pt-4 border-t border-slate-100 flex justify-end gap-3">
          <button
            type="button"
            onclick={closeModal}
            class="px-4 py-2 border border-slate-300 text-slate-700 text-sm font-semibold rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            class="px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            {#if isSubmitting}
              <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Menyimpan...
            {:else}
              Simpan
            {/if}
          </button>
        </div>
      </form>
    </div>
  </div>
{/if}
