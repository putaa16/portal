<script lang="ts">
	import { onMount } from "svelte";
	import LexicalEditor from "$lib/components/LexicalEditor.svelte";
	import { toast } from "svelte-sonner";

	let { apiBaseUrl = '/api/news' } = $props<{ apiBaseUrl?: string }>();

	async function fetchAPI(endpoint: string, options: RequestInit = {}) {
		const res = await fetch(`${apiBaseUrl}${endpoint.replace('/admin', '')}`, options);
		if (!res.ok) throw new Error(await res.text());
		return res.headers.get('content-type')?.includes('application/json') ? await res.json() : await res.text();
	}

	let beritas = $state<any[]>([]);
	let kategoris = $state<any[]>([]);
	let loading = $state(true);

  let isModalOpen = $state(false);
  let isSubmitting = $state(false);

  let editId = $state<number | null>(null);
  let formJudul = $state("");
  let formLokasi = $state("");
  let formKategori = $state<any>("");
  let formDeskripsi = $state("");
  let formFoto = $state<File | null>(null);
  let existingFotoUrl = $state("");

  async function loadData() {
    loading = true;
    try {
      const [resBerita, resKat] = await Promise.all([
        fetchAPI("/berita"),
        fetchAPI("/kategori"),
      ]);
      beritas = resBerita;
      kategoris = resKat;
    } catch (error) {
      console.error(error);
      toast.error("Gagal memuat data");
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadData();
  });

  function openModal(berita: any = null) {
    if (berita) {
      editId = berita.id;
      formJudul = berita.judul;
      formLokasi = berita.lokasi;
      formKategori = berita.kategori_id;
      formDeskripsi = berita.deskripsi;
      existingFotoUrl = berita.foto;
    } else {
      editId = null;
      formJudul = "";
      formLokasi = "";
      formKategori = "";
      formDeskripsi = "";
      existingFotoUrl = "";
    }
    formFoto = null;
    isModalOpen = true;
  }

  function closeModal() {
    isModalOpen = false;
  }

  function handleFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      formFoto = file;
    }
  }

  async function handleSubmit() {
    const isDeskripsiEmpty = !formDeskripsi || formDeskripsi.trim() === "" || formDeskripsi.trim() === "<p></p>";
    if (!formJudul || !formLokasi || !formKategori || isDeskripsiEmpty) {
      toast.error("Mohon lengkapi semua field!");
      return;
    }

    if (formFoto && formFoto.size > 5 * 1024 * 1024) {
      toast.error("Ukuran foto terlalu besar. Maksimal 5 MB.");
      return;
    }

    isSubmitting = true;
    try {
      const formData = new FormData();
      formData.append("judul", formJudul);
      formData.append("lokasi", formLokasi);
      formData.append("kategori_id", formKategori.toString());
      formData.append("deskripsi", formDeskripsi);
      if (formFoto) {
        formData.append("foto", formFoto);
      }

      if (editId) {
        await fetchAPI(`/admin/berita/${editId}`, {
          method: "PUT",
          body: formData,
        });
        toast.success("Berita berhasil diperbarui!");
      } else {
        await fetchAPI("/admin/berita", {
          method: "POST",
          body: formData,
        });
        toast.success("Berita berhasil ditambahkan!");
      }
      closeModal();
      loadData();
    } catch (error: any) {
      toast.error(error.message || "Gagal menyimpan berita");
    } finally {
      isSubmitting = false;
    }
  }

  async function handleDelete(id: number) {
    if (!confirm("Apakah Anda yakin ingin menghapus berita ini?")) return;
    try {
      await fetchAPI(`/admin/berita/${id}`, {
        method: "DELETE",
      });
      toast.success("Berita berhasil dihapus!");
      loadData();
    } catch (error: any) {
      toast.error(error.message || "Gagal menghapus berita");
    }
  }
</script>

<svelte:head>
  <title>Manajemen Berita - Admin Panel</title>
</svelte:head>

<div class="mb-6 flex justify-between items-center">
  <div>
    <h1 class="text-2xl font-bold text-slate-900">Daftar Berita</h1>
    <p class="text-slate-500 text-sm mt-1">
      Kelola semua artikel berita yang ada di portal Anda.
    </p>
  </div>
  <button
    on:click={() => openModal()}
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
    Tulis Berita
  </button>
</div>

<div
  class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden"
>
  <div class="overflow-x-auto">
    <table class="min-w-full divide-y divide-slate-200">
      <thead class="bg-slate-50">
        <tr>
          <th
            class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase"
            >Foto</th
          >
          <th
            class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase"
            >Judul</th
          >
          <th
            class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase"
            >Kategori</th
          >
          <th
            class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase"
            >Tanggal</th
          >
          <th
            class="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase"
            >Aksi</th
          >
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-slate-200">
        {#if loading}
          <tr
            ><td colspan="5" class="px-6 py-12 text-center text-slate-500"
              >Memuat data...</td
            ></tr
          >
        {:else if beritas.length === 0}
          <tr
            ><td colspan="5" class="px-6 py-12 text-center text-slate-500"
              >Belum ada berita.</td
            ></tr
          >
        {:else}
          {#each beritas as berita}
            <tr class="hover:bg-slate-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap">
                {#if berita.foto}
                  <img
                    src="http://localhost:3000{berita.foto}"
                    alt="Foto"
                    class="h-12 w-16 object-cover rounded shadow-sm"
                  />
                {:else}
                  <div
                    class="h-12 w-16 bg-slate-100 rounded flex items-center justify-center text-xs text-slate-400 border border-slate-200"
                  >
                    No Img
                  </div>
                {/if}
              </td>
              <td class="px-6 py-4">
                <div
                  class="text-sm font-medium text-slate-900 line-clamp-2"
                  title={berita.judul}
                >
                  {berita.judul}
                </div>
                <div class="text-xs text-slate-500">{berita.lokasi}</div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                <span
                  class="px-2.5 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium border border-slate-200"
                  >{berita.kategori?.nama || "-"}</span
                >
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">
                {new Date(berita.created_at).toLocaleDateString("id-ID")}
              </td>
              <td
                class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"
              >
                <button
                  on:click={() => openModal(berita)}
                  class="text-indigo-600 hover:text-indigo-900 mr-4"
                  >Edit</button
                >
                <button
                  on:click={() => handleDelete(berita.id)}
                  class="text-red-600 hover:text-red-900">Hapus</button
                >
              </td>
            </tr>
          {/each}
        {/if}
      </tbody>
    </table>
  </div>
</div>

<!-- Modal Form -->
{#if isModalOpen}
  <div
    class="fixed inset-0 z-50 overflow-y-auto"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div
        class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
        aria-hidden="true"
        on:click={closeModal}
      ></div>
      <span
        class="hidden sm:inline-block sm:align-middle sm:h-screen"
        aria-hidden="true">&#8203;</span
      >
      <div
        class="relative z-10 inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full"
      >
        <form on:submit|preventDefault={handleSubmit}>
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3
              class="text-xl leading-6 font-semibold text-slate-900 mb-6 border-b pb-4"
              id="modal-title"
            >
              {editId ? "Edit Berita" : "Tulis Berita Baru"}
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="col-span-2">
                <label
                  for="judul"
                  class="block text-sm font-medium text-slate-700"
                  >Judul Berita</label
                >
                <input
                  type="text"
                  id="judul"
                  bind:value={formJudul}
                  required
                  class="mt-1 block w-full border border-slate-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  for="kategori"
                  class="block text-sm font-medium text-slate-700"
                  >Kategori</label
                >
                <select
                  id="kategori"
                  bind:value={formKategori}
                  required
                  class="mt-1 block w-full border border-slate-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
                >
                  <option value="" disabled>Pilih Kategori...</option>
                  {#each kategoris as kat}
                    <option value={kat.id}>{kat.nama}</option>
                  {/each}
                </select>
              </div>

              <div>
                <label
                  for="lokasi"
                  class="block text-sm font-medium text-slate-700">Lokasi</label
                >
                <input
                  type="text"
                  id="lokasi"
                  bind:value={formLokasi}
                  required
                  placeholder="Misal: Jakarta, Indonesia"
                  class="mt-1 block w-full border border-slate-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="col-span-2">
                <label
                  for="foto"
                  class="block text-sm font-medium text-slate-700"
                  >Upload Foto</label
                >
                {#if existingFotoUrl && !formFoto}
                  <div class="mt-2 mb-2">
                    <img
                      src="{API_URL}{existingFotoUrl}"
                      alt="Preview"
                      class="h-32 rounded border border-slate-200"
                    />
                  </div>
                {/if}
                <input
                  type="file"
                  id="foto"
                  accept="image/*"
                  on:change={handleFileChange}
                  class="mt-1 block w-full text-sm text-slate-500
									file:mr-4 file:py-2 file:px-4
									file:rounded-full file:border-0
									file:text-sm file:font-semibold
									file:bg-indigo-50 file:text-indigo-700
									hover:file:bg-indigo-100 transition-colors
									"
                />
              </div>

              <div class="col-span-2 relative">
                <label
                  for="deskripsi"
                  class="block text-sm font-medium text-slate-700 mb-1"
                  >Isi Berita</label
                >
                <LexicalEditor bind:value={formDeskripsi} />
                <textarea
                  class="absolute w-0 h-0 opacity-0 pointer-events-none"
                  required
                  bind:value={formDeskripsi}
                ></textarea>
              </div>
            </div>
          </div>
          <div
            class="bg-slate-50 px-4 py-4 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-2xl border-t border-slate-200"
          >
            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50 transition-colors"
            >
              {isSubmitting ? "Menyimpan..." : "Simpan & Publikasikan"}
            </button>
            <button
              type="button"
              on:click={closeModal}
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
