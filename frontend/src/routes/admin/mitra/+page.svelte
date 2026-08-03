<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { fetchAPI, API_URL } from "$lib/api";
  import { toast } from "svelte-sonner";
  import { superForm } from "sveltekit-superforms";
  import { zod4 } from "sveltekit-superforms/adapters";
  import { z } from "zod";

  let mitras = $state<any[]>([]);
  let loading = $state(true);

  let isModalOpen = $state(false);
  let isSubmitting = $state(false);

  let editId = $state<number | null>(null);
  let existingLogoUrl = $state("");
  let logoPreviewUrl = $state("");
  let existingDokumenUrl = $state("");
  let dokumenFileName = $state("");
  let dokumenPreviewUrl = $state("");

  // File Compression States
  let isFileTooLarge = $state(false);
  let selectedFileSize = $state(0);
  let rawFile = $state<File | null>(null);
  let isCompressing = $state(false);

  // Zod validation schema
  const schema = z.object({
    nama: z.string()
      .trim()
      .min(1, "Nama mitra tidak boleh kosong")
      .min(3, "Nama mitra minimal harus terdiri dari 3 karakter"),
    status: z.enum(["draft", "published"]),
    masa_aktif: z.string().min(1, "Masa aktif kerja sama tidak boleh kosong"),
    logo: z.any().optional(),
    bukti_dokumen: z.any().optional()
  }).superRefine((data, ctx) => {
    // Logo & dokumen wajib diunggah untuk mitra baru
    if (!editId) {
      if (!data.logo) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Logo mitra wajib diunggah",
          path: ["logo"]
        });
      }
      if (!data.bukti_dokumen) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Bukti dokumen kerja sama wajib diunggah",
          path: ["bukti_dokumen"]
        });
      }
    }

    if (data.logo) {
      const file = data.logo as File;
      if (file.size > 5 * 1024 * 1024) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Ukuran logo terlalu besar. Maksimal 5 MB.",
          path: ["logo"]
        });
      }
      const allowedTypes = ["image/jpeg", "image/jpg", "image/png", "image/webp", "image/gif"];
      if (!allowedTypes.includes(file.type)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Format file logo tidak didukung. Harap unggah file gambar (jpg, jpeg, png, webp, gif)",
          path: ["logo"]
        });
      }
    }

    if (data.bukti_dokumen) {
      const file = data.bukti_dokumen as File;
      if (file.size > 10 * 1024 * 1024) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Ukuran dokumen terlalu besar. Maksimal 10 MB.",
          path: ["bukti_dokumen"]
        });
      }
      const filename = file.name.toLowerCase();
      const allowedExts = [".pdf"];
      const ext = filename.substring(filename.lastIndexOf("."));
      if (!allowedExts.includes(ext)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Format bukti dokumen tidak didukung. Harap unggah berkas (pdf)",
          path: ["bukti_dokumen"]
        });
      }
    }
  });

  const { form, errors, enhance, reset } = superForm(
    {
      nama: "",
      status: "published" as "draft" | "published",
      masa_aktif: "",
      logo: null as File | null,
      bukti_dokumen: null as File | null
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
          formData.append("nama", f.data.nama);
          formData.append("status", f.data.status);
          formData.append("masa_aktif", f.data.masa_aktif);
          if (f.data.logo) {
            formData.append("logo", f.data.logo);
          }
          if (f.data.bukti_dokumen) {
            formData.append("bukti_dokumen", f.data.bukti_dokumen);
          }

          if (editId) {
            await fetchAPI(`/admin/mitra/${editId}`, {
              method: "PUT",
              body: formData,
            });
            toast.success("Mitra berhasil diperbarui!");
          } else {
            await fetchAPI("/admin/mitra", {
              method: "POST",
              body: formData,
            });
            toast.success("Mitra berhasil ditambahkan!");
          }
          closeModal();
          loadData();
        } catch (error: any) {
          toast.error(error.message || "Gagal menyimpan mitra");
        } finally {
          isSubmitting = false;
        }
      }
    }
  );

  async function loadData() {
    loading = true;
    try {
      mitras = await fetchAPI("/admin/mitra");
    } catch (error) {
      console.error(error);
      toast.error("Gagal memuat data mitra");
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadData();
  });

  onDestroy(() => {
    if (logoPreviewUrl) {
      URL.revokeObjectURL(logoPreviewUrl);
    }
    if (dokumenPreviewUrl) {
      URL.revokeObjectURL(dokumenPreviewUrl);
    }
  });

  function formatDateLocal(dateString: string): string {
    if (!dateString) return "";
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return "";
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function openModal(mitra: any = null) {
    reset();
    if (logoPreviewUrl) {
      URL.revokeObjectURL(logoPreviewUrl);
      logoPreviewUrl = "";
    }
    if (dokumenPreviewUrl) {
      URL.revokeObjectURL(dokumenPreviewUrl);
      dokumenPreviewUrl = "";
    }
    dokumenFileName = "";
    isFileTooLarge = false;
    selectedFileSize = 0;
    rawFile = null;
    isCompressing = false;

    if (mitra) {
      editId = mitra.id;
      $form.nama = mitra.nama;
      $form.status = mitra.status;
      $form.masa_aktif = formatDateLocal(mitra.masa_aktif);
      existingLogoUrl = mitra.logo;
      existingDokumenUrl = mitra.bukti_dokumen;
      if (mitra.bukti_dokumen) {
        const parts = mitra.bukti_dokumen.split("/");
        dokumenFileName = parts[parts.length - 1];
      }
    } else {
      editId = null;
      $form.nama = "";
      $form.status = "published";
      $form.masa_aktif = "";
      existingLogoUrl = "";
      existingDokumenUrl = "";
    }
    $form.logo = null;
    $form.bukti_dokumen = null;
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
    reset();
    if (logoPreviewUrl) {
      URL.revokeObjectURL(logoPreviewUrl);
      logoPreviewUrl = "";
    }
    if (dokumenPreviewUrl) {
      URL.revokeObjectURL(dokumenPreviewUrl);
      dokumenPreviewUrl = "";
    }
    dokumenFileName = "";
    isFileTooLarge = false;
    selectedFileSize = 0;
    rawFile = null;
    isCompressing = false;
  }

  function handleLogoChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      rawFile = file;
      selectedFileSize = file.size;
      isFileTooLarge = file.size > 5 * 1024 * 1024;

      $form.logo = file;
      if (logoPreviewUrl) {
        URL.revokeObjectURL(logoPreviewUrl);
      }
      logoPreviewUrl = URL.createObjectURL(file);
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
      $form.logo = compressed;
      selectedFileSize = compressed.size;
      isFileTooLarge = compressed.size > 5 * 1024 * 1024;
      if (logoPreviewUrl) {
        URL.revokeObjectURL(logoPreviewUrl);
      }
      logoPreviewUrl = URL.createObjectURL(compressed);
      toast.success(`Logo berhasil dikompres! Ukuran baru: ${(compressed.size / (1024 * 1024)).toFixed(2)} MB`);
    } catch (err) {
      console.error(err);
      toast.error("Gagal mengompres logo");
    } finally {
      isCompressing = false;
    }
  }

  function handleDokumenChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      $form.bukti_dokumen = file;
      dokumenFileName = file.name;
      if (dokumenPreviewUrl) {
        URL.revokeObjectURL(dokumenPreviewUrl);
      }
      dokumenPreviewUrl = URL.createObjectURL(file);
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Apakah Anda yakin ingin menghapus mitra ini?")) return;
    try {
      await fetchAPI(`/admin/mitra/${id}`, {
        method: "DELETE",
      });
      toast.success("Mitra berhasil dihapus!");
      loadData();
    } catch (error: any) {
      toast.error(error.message || "Gagal menghapus mitra");
    }
  }

  function checkActive(dateString: string): boolean {
    if (!dateString) return false;
    const d = new Date(dateString);
    return d.getTime() > Date.now();
  }
</script>

<svelte:head>
  <title>Manajemen Mitra Kerja Sama - Admin Panel</title>
</svelte:head>

<div class="mb-6 flex justify-between items-center">
  <div>
    <h1 class="text-2xl font-bold text-slate-900">Mitra Kerja Sama</h1>
    <p class="text-slate-500 text-sm mt-1">
      Kelola daftar mitra instansi, logo, dokumen kerja sama, dan status masa aktif.
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
    Tambah Mitra
  </button>
</div>

<div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-slate-200">
      <thead class="bg-slate-50">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Logo</th>
          <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Nama Mitra</th>
          <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Masa Aktif</th>
          <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Status Aktif</th>
          <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Status Publikasi</th>
          <th class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase">Dokumen</th>
          <th class="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase">Aksi</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-200">
        {#if loading}
          <tr>
            <td colspan="7" class="px-6 py-12 text-center text-slate-500">Memuat data...</td>
          </tr>
        {:else if mitras.length === 0}
          <tr>
            <td colspan="7" class="px-6 py-12 text-center text-slate-500">Belum ada data mitra kerja sama.</td>
          </tr>
        {:else}
          {#each mitras as mitra}
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap">
                {#if mitra.logo}
                  <img
                    src="{API_URL}{mitra.logo}"
                    alt="Logo Mitra"
                    class="h-10 w-10 object-contain rounded bg-slate-50 p-1 border border-slate-200"
                  />
                {:else}
                  <div class="h-10 w-10 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-400 border border-slate-200">
                    No Logo
                  </div>
                {/if}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="text-sm font-medium text-slate-900">{mitra.nama}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                {new Date(mitra.masa_aktif).toLocaleDateString("id-ID", {
                  day: "numeric",
                  month: "long",
                  year: "numeric"
                })}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {#if checkActive(mitra.masa_aktif)}
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                    Aktif
                  </span>
                {:else}
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800">
                    Kedaluwarsa
                  </span>
                {/if}
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                {#if mitra.status === 'published'}
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                    Published
                  </span>
                {:else}
                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                    Draft
                  </span>
                {/if}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm">
                {#if mitra.bukti_dokumen}
                  <a
                    href="{API_URL}{mitra.bukti_dokumen}"
                    target="_blank"
                    class="text-indigo-600 hover:text-indigo-900 font-medium inline-flex items-center gap-1"
                  >
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    Lihat
                  </a>
                {:else}
                  <span class="text-slate-400">Tidak ada file</span>
                {/if}
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button
                  onclick={() => openModal(mitra)}
                  class="text-indigo-600 hover:text-indigo-900 mr-4 font-semibold"
                >
                  Edit
                </button>
                <button
                  onclick={() => handleDelete(mitra.id)}
                  class="text-red-600 hover:text-red-900 font-semibold"
                >
                  Hapus
                </button>
              </td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </div>
</div>

<!-- Modal Form (Tambah/Edit) -->
{#if isModalOpen}
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
    <div class="bg-white rounded-xl shadow-xl border border-slate-200 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-150">
      <div class="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
        <h2 class="text-lg font-bold text-slate-900">
          {editId ? "Edit Mitra Kerja Sama" : "Tambah Mitra Kerja Sama"}
        </h2>
        <button
          onclick={closeModal}
          class="text-slate-400 hover:text-slate-600 rounded-lg p-1 hover:bg-slate-100"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
            ><path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path></svg
          >
        </button>
      </div>

      <form use:enhance method="POST" class="p-6 space-y-4">
        <!-- Nama Mitra -->
        <div>
          <label for="form-nama" class="block text-sm font-semibold text-slate-700 mb-1">
            Nama Mitra <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="form-nama"
            name="nama"
            bind:value={$form.nama}
            placeholder="Masukkan nama instansi mitra"
            class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {#if $errors.nama}
            <p class="text-red-500 text-xs mt-1">{$errors.nama}</p>
          {/if}
        </div>

        <!-- Masa Aktif -->
        <div>
          <label for="form-masa-aktif" class="block text-sm font-semibold text-slate-700 mb-1">
            Masa Aktif Kerja Sama <span class="text-red-500">*</span>
          </label>
          <input
            type="date"
            id="form-masa-aktif"
            name="masa_aktif"
            bind:value={$form.masa_aktif}
            class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {#if $errors.masa_aktif}
            <p class="text-red-500 text-xs mt-1">{$errors.masa_aktif}</p>
          {/if}
        </div>

        <!-- Status Kerja Sama -->
        <div>
          <label for="form-status" class="block text-sm font-semibold text-slate-700 mb-1">
            Status Publikasi
          </label>
          <select
            id="form-status"
            name="status"
            bind:value={$form.status}
            class="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="published">Published (Tampil di Publik)</option>
            <option value="draft">Draft (Hanya di Admin Panel)</option>
          </select>
          {#if $errors.status}
            <p class="text-red-500 text-xs mt-1">{$errors.status}</p>
          {/if}
        </div>

        <!-- Logo Mitra -->
        <div>
          <label for="form-logo" class="block text-sm font-semibold text-slate-700 mb-1">
            Logo Mitra <span class="text-red-500">{editId ? "" : "*"}</span>
          </label>
          <input
            type="file"
            id="form-logo"
            accept="image/*"
            onchange={handleLogoChange}
            class="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
          <p class="text-slate-400 text-xs mt-1">Format gambar (jpg, png, webp, gif). Maksimal 5 MB.</p>
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
          {#if logoPreviewUrl}
            <div class="mt-2">
              <span class="text-xs text-slate-500">Pratinjau Logo Baru:</span>
              <img src={logoPreviewUrl} alt="Preview" class="h-16 w-16 object-contain rounded border border-slate-200 p-1 mt-1" />
            </div>
          {:else}
            {#if existingLogoUrl}
              <div class="mt-2">
                <span class="text-xs text-slate-500">Logo Saat Ini:</span>
                <img src="{API_URL}{existingLogoUrl}" alt="Current Logo" class="h-16 w-16 object-contain rounded border border-slate-200 p-1 mt-1" />
              </div>
            {/if}
          {/if}
          {#if $errors.logo}
            <p class="text-red-500 text-xs mt-1">{$errors.logo}</p>
          {/if}
        </div>

        <!-- Bukti Dokumen Kerja Sama -->
        <div>
          <label for="form-dokumen" class="block text-sm font-semibold text-slate-700 mb-1">
            Bukti Dokumen Kerja Sama <span class="text-red-500">{editId ? "" : "*"}</span>
          </label>
          <input
            type="file"
            id="form-dokumen"
            accept=".pdf"
            onchange={handleDokumenChange}
            class="w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
          <p class="text-slate-400 text-xs mt-1">Format berkas dokumen (.pdf). Maksimal 10 MB.</p>

          {#if dokumenFileName}
            <div class="mt-2 text-xs text-slate-600 flex items-center justify-between bg-slate-50 p-2 rounded border border-slate-200">
              <div class="flex items-center gap-1 min-w-0">
                <svg class="w-4 h-4 text-indigo-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span class="truncate">{dokumenFileName}</span>
              </div>
              
              {#if dokumenPreviewUrl}
                <a
                  href={dokumenPreviewUrl}
                  target="_blank"
                  class="text-indigo-600 hover:text-indigo-900 font-semibold shrink-0"
                >
                  Pratinjau
                </a>
              {:else}
                {#if existingDokumenUrl}
                  <a
                    href="{API_URL}{existingDokumenUrl}"
                    target="_blank"
                    class="text-indigo-600 hover:text-indigo-900 font-semibold shrink-0"
                  >
                    Lihat Dokumen Saat Ini
                  </a>
                {/if}
              {/if}
            </div>
          {/if}
          {#if $errors.bukti_dokumen}
            <p class="text-red-500 text-xs mt-1">{$errors.bukti_dokumen}</p>
          {/if}
        </div>

        <!-- Action Buttons -->
        <div class="flex justify-end gap-3 pt-4 border-t border-slate-200">
          <button
            type="button"
            onclick={closeModal}
            class="px-4 py-2 border border-slate-300 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
          >
            Batal
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5 shadow-sm disabled:opacity-50"
          >
            {#if isSubmitting}
              <div class="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
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
