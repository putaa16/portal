<script lang="ts">
  import { onMount } from "svelte";
  import { fetchAPI, API_URL } from "$lib/api";

  let akreditasiList = $state<any[]>([]);
  let searchQuery = $state("");
  let filterType = $state("all"); // 'all', 'foto', 'dokumen'
  let loading = $state(true);

  // Lightbox preview for image accreditation
  let lightboxImage = $state<string | null>(null);
  let lightboxTitle = $state("");

  onMount(async () => {
    try {
      akreditasiList = await fetchAPI("/akreditasi");
    } catch (error) {
      console.error(error);
    } finally {
      loading = false;
    }
  });

  // Filtered lists using Svelte 5 reactive values
  let filteredList = $derived(
    akreditasiList.filter((item) => {
      const matchesSearch = item.judul.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesType = filterType === "all" || item.jenis === filterType;
      return matchesSearch && matchesType;
    })
  );

  function openLightbox(imageUrl: string, title: string) {
    lightboxImage = imageUrl;
    lightboxTitle = title;
  }

  function closeLightbox() {
    lightboxImage = null;
    lightboxTitle = "";
  }
</script>

<svelte:head>
  <title>Sertifikasi & Akreditasi - Portal Berita</title>
</svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-900 font-sans">
  <!-- Navbar -->
  <nav class="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center gap-8">
          <a href="/" class="shrink-0 flex items-center gap-2 cursor-pointer">
            <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">P</div>
            <span class="font-bold text-xl tracking-tight text-slate-800">PortalBerita</span>
          </a>
          <div class="hidden sm:flex sm:space-x-8">
            <a href="/" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 hover:border-slate-300 transition-all">
              Berita
            </a>
            <a href="/agenda" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 hover:border-slate-300 transition-all">
              Agenda
            </a>
            <a href="/mitra" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 hover:border-slate-300 transition-all">
              Mitra
            </a>
            <a href="/akreditasi" class="inline-flex items-center px-1 pt-1 border-b-2 border-blue-600 text-sm font-medium text-blue-600 transition-all">
              Akreditasi
            </a>
          </div>
        </div>
        <div class="flex items-center">
          <a href="/login" class="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">Admin Login</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Header -->
    <div class="mb-12 text-center">
      <h1 class="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
        Sertifikasi & Akreditasi
      </h1>
      <p class="text-xl text-slate-500 max-w-2xl mx-auto">
        Bukti resmi standar kualitas dan akreditasi yang diakui oleh lembaga nasional dan internasional.
      </p>
    </div>

    <!-- Search & Filter Controls -->
    <div class="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
      <!-- Search Bar -->
      <div class="relative w-full md:max-w-md">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Cari sertifikat atau dokumen akreditasi..."
          class="pl-10 pr-4 py-2 w-full border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <!-- Filter Buttons -->
      <div class="flex gap-2 w-full md:w-auto">
        <button
          onclick={() => filterType = 'all'}
          class="px-4 py-2 text-xs font-semibold rounded-lg border transition-all {filterType === 'all' ? 'bg-blue-600 border-blue-600 text-white shadow-sm' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'}"
        >
          Semua File
        </button>
        <button
          onclick={() => filterType = 'foto'}
          class="px-4 py-2 text-xs font-semibold rounded-lg border transition-all {filterType === 'foto' ? 'bg-purple-600 border-purple-600 text-white shadow-sm' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'}"
        >
          Sertifikat / Foto
        </button>
        <button
          onclick={() => filterType = 'dokumen'}
          class="px-4 py-2 text-xs font-semibold rounded-lg border transition-all {filterType === 'dokumen' ? 'bg-indigo-600 border-indigo-600 text-white shadow-sm' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'}"
        >
          Dokumen PDF
        </button>
      </div>
    </div>

    <!-- Data Display -->
    {#if loading}
      <div class="flex justify-center items-center py-20">
        <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    {:else if filteredList.length === 0}
      <div class="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-200">
        <p class="text-slate-500 text-lg">Tidak ada dokumen akreditasi yang sesuai dengan pencarian Anda.</p>
      </div>
    {:else}
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each filteredList as item}
          <div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group">
            
            {#if item.jenis === 'foto'}
              <!-- Image Card Header -->
              <button
                onclick={() => openLightbox(`${API_URL}${item.file}`, item.judul)}
                class="h-52 bg-slate-50 border-b border-slate-100 relative overflow-hidden flex items-center justify-center p-4 group cursor-pointer w-full text-left focus:outline-none"
              >
                <img 
                  src="{API_URL}{item.file}" 
                  alt={item.judul} 
                  class="max-h-full max-w-full object-contain rounded group-hover:scale-102 transition-transform duration-300"
                />
                <!-- Zoom Overlay -->
                <div class="absolute inset-0 bg-slate-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span class="bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-md text-slate-700">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                  </span>
                </div>
              </button>
            {:else}
              <!-- Document PDF Card Header -->
              <div class="h-52 bg-slate-50 border-b border-slate-100 flex flex-col items-center justify-center p-6 text-indigo-500">
                <svg class="w-16 h-16 text-indigo-400 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                <span class="text-xs font-semibold uppercase text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200 mt-4 tracking-wider">
                  PDF Dokumen
                </span>
              </div>
            {/if}

            <!-- Details -->
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-lg font-bold text-slate-900 mb-2 line-clamp-2" title={item.judul}>
                  {item.judul}
                </h3>
                <div class="flex items-center text-xs text-slate-500 mb-6 gap-1.5">
                  <svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                  Diunggah pada {new Date(item.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
              </div>

              {#if item.jenis === 'foto'}
                <button
                  onclick={() => openLightbox(`${API_URL}${item.file}`, item.judul)}
                  class="mt-auto w-full inline-flex justify-center items-center gap-2 px-4 py-2 border border-blue-600 rounded-lg text-sm font-semibold text-blue-600 bg-white hover:bg-blue-50 transition-colors cursor-pointer"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                  Lihat Sertifikat
                </button>
              {:else}
                <a
                  href="{API_URL}{item.file}"
                  target="_blank"
                  class="mt-auto w-full inline-flex justify-center items-center gap-2 px-4 py-2 border border-indigo-600 rounded-lg text-sm font-semibold text-indigo-600 bg-white hover:bg-indigo-50 transition-colors cursor-pointer"
                >
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                  Lihat Dokumen PDF
                </a>
              {/if}
            </div>

          </div>
        {/each}
      </div>
    {/if}
  </main>
</div>

<!-- Lightbox Modal -->
{#if lightboxImage}
  <!-- svelte-ignore a11y_click_events_have_key_events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <div 
    class="fixed inset-0 z-[100] bg-slate-950/85 backdrop-blur-sm flex flex-col items-center justify-center p-4"
    onclick={closeLightbox}
  >
    <div class="relative max-w-4xl max-h-[85vh] flex flex-col items-center gap-4" onclick={(e) => e.stopPropagation()}>
      <img src={lightboxImage} alt={lightboxTitle} class="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10" />
      <div class="text-white text-center">
        <h4 class="text-lg font-bold">{lightboxTitle}</h4>
      </div>
      <!-- Close button -->
      <button 
        onclick={closeLightbox}
        class="absolute -top-12 right-0 text-white hover:text-slate-300 p-2 text-sm font-bold flex items-center gap-1 cursor-pointer"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        Tutup
      </button>
    </div>
  </div>
{/if}
