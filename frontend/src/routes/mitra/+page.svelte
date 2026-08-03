<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchAPI, API_URL } from '$lib/api';

	let mitraList: any[] = [];
	let searchQuery = $state('');
	let statusFilter = $state('all'); // 'all', 'active', 'expired'
	let loading = $state(true);

	onMount(async () => {
		try {
			mitraList = await fetchAPI('/mitra');
		} catch (error) {
			console.error(error);
		} finally {
			loading = false;
		}
	});

	function checkActive(dateString: string): boolean {
		if (!dateString) return false;
		const d = new Date(dateString);
		return d.getTime() > Date.now();
	}

	// Filtered list using Svelte 5 reactive values
	let filteredMitra = $derived(
		mitraList.filter((mitra) => {
			const matchesSearch = mitra.nama.toLowerCase().includes(searchQuery.toLowerCase());
			const isActive = checkActive(mitra.masa_aktif);
			
			if (statusFilter === 'active') {
				return matchesSearch && isActive;
			} else if (statusFilter === 'expired') {
				return matchesSearch && !isActive;
			}
			return matchesSearch;
		})
	);
</script>

<svelte:head>
	<title>Mitra Kerja Sama - Portal Berita</title>
</svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-900 font-sans">
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
						<a href="/mitra" class="inline-flex items-center px-1 pt-1 border-b-2 border-blue-600 text-sm font-medium text-blue-600 transition-all">
							Mitra
						</a>
						<a href="/akreditasi" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 hover:border-slate-300 transition-all">
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

	<main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		<div class="mb-12 text-center">
			<h1 class="text-4xl font-extrabold text-slate-900 tracking-tight sm:text-5xl mb-4">
				Mitra Kerja Sama Kami
			</h1>
			<p class="text-xl text-slate-500 max-w-2xl mx-auto">
				Daftar instansi, lembaga, dan perusahaan yang bekerja sama resmi dengan Portal Berita.
			</p>
		</div>

		<!-- Search & Filter Controls -->
		<div class="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-slate-200">
			<!-- Search Bar -->
			<div class="relative w-full md:max-w-md">
				<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
				</div>
				<input
					type="text"
					bind:value={searchQuery}
					placeholder="Cari mitra kerja sama..."
					class="pl-10 pr-4 py-2 w-full border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
				/>
			</div>

			<!-- Filter Tabs -->
			<div class="flex gap-2 w-full md:w-auto">
				<button
					onclick={() => statusFilter = 'all'}
					class="px-4 py-2 text-xs font-semibold rounded-lg border transition-all {statusFilter === 'all' ? 'bg-blue-600 border-blue-600 text-white shadow-sm' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'}"
				>
					Semua Mitra
				</button>
				<button
					onclick={() => statusFilter = 'active'}
					class="px-4 py-2 text-xs font-semibold rounded-lg border transition-all {statusFilter === 'active' ? 'bg-emerald-600 border-emerald-600 text-white shadow-sm' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'}"
				>
					Aktif
				</button>
				<button
					onclick={() => statusFilter = 'expired'}
					class="px-4 py-2 text-xs font-semibold rounded-lg border transition-all {statusFilter === 'expired' ? 'bg-rose-600 border-rose-600 text-white shadow-sm' : 'bg-white border-slate-300 text-slate-600 hover:bg-slate-50'}"
				>
					Berakhir
				</button>
			</div>
		</div>

		{#if loading}
			<div class="flex justify-center items-center py-20">
				<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
			</div>
		{:else if filteredMitra.length === 0}
			<div class="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-200">
				<p class="text-slate-500 text-lg">Tidak ada mitra kerja sama yang sesuai dengan pencarian Anda.</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each filteredMitra as mitra}
					<div class="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow group">
						<!-- Logo Area -->
						<div class="h-44 bg-slate-50 border-b border-slate-100 p-8 flex items-center justify-center relative">
							{#if mitra.logo}
								<img 
									src="{API_URL}{mitra.logo}" 
									alt="Logo {mitra.nama}" 
									class="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
								/>
							{:else}
								<div class="text-slate-300 text-sm font-semibold uppercase">No Logo</div>
							{/if}

							<!-- Status Badge -->
							<div class="absolute top-4 right-4">
								{#if checkActive(mitra.masa_aktif)}
									<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200 shadow-sm">
										Aktif
									</span>
								{:else}
									<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-rose-100 text-rose-800 border border-rose-200 shadow-sm">
										Kerja Sama Berakhir
									</span>
								{/if}
							</div>
						</div>

						<!-- Details -->
						<div class="p-6 flex-1 flex flex-col justify-between">
							<div>
								<h3 class="text-lg font-bold text-slate-900 mb-2 line-clamp-2" title={mitra.nama}>
									{mitra.nama}
								</h3>
								<div class="flex items-center text-xs text-slate-500 mb-6 gap-1.5">
									<svg class="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
									Masa Aktif s.d. {new Date(mitra.masa_aktif).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
								</div>
							</div>

							{#if mitra.bukti_dokumen}
								<a
									href="{API_URL}{mitra.bukti_dokumen}"
									target="_blank"
									class="mt-auto w-full inline-flex justify-center items-center gap-2 px-4 py-2 border border-blue-600 rounded-lg text-sm font-semibold text-blue-600 bg-white hover:bg-blue-50 transition-colors cursor-pointer"
								>
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
									Lihat Dokumen
								</a>
							{/if}
						</div>
					</div>
				{/each}
			</div>
		{/if}
	</main>
</div>
