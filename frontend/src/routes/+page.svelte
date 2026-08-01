<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchAPI, API_URL } from '$lib/api';

	let beritaList: any[] = [];
	let loading = true;

	onMount(async () => {
		try {
			beritaList = await fetchAPI('/berita');
		} catch (error) {
			console.error(error);
		} finally {
			loading = false;
		}
	});

	function stripHTML(html: string) {
		if (!html) return '';
		// Strip all HTML tags and replace with space, collapsing multiple spaces
		return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
	}
</script>

<svelte:head>
	<title>Portal Berita Terkini</title>
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
						<a href="/" class="inline-flex items-center px-1 pt-1 border-b-2 border-blue-600 text-sm font-medium text-blue-600 transition-all">
							Berita
						</a>
						<a href="/agenda" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 hover:border-slate-300 transition-all">
							Agenda
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
				Berita Terbaru Hari Ini
			</h1>
			<p class="text-xl text-slate-500 max-w-2xl mx-auto">
				Dapatkan informasi terkini dan terpercaya dari seluruh penjuru negeri, langsung di layar Anda.
			</p>
		</div>

		{#if loading}
			<div class="flex justify-center items-center py-20">
				<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
			</div>
		{:else if beritaList.length === 0}
			<div class="text-center py-20 bg-white rounded-2xl shadow-sm border border-slate-100">
				<p class="text-slate-500 text-lg">Belum ada berita yang dipublikasikan.</p>
			</div>
		{:else}
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{#each beritaList as berita}
					<div class="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
						<div class="relative h-56 overflow-hidden bg-slate-100">
							{#if berita.foto}
								<img 
									src="{API_URL}{berita.foto}" 
									alt={berita.judul} 
									class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							{:else}
								<div class="w-full h-full flex items-center justify-center text-slate-400">
									<svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
								</div>
							{/if}
							<div class="absolute top-4 left-4">
								<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-sm">
									{berita.kategori?.nama || 'Uncategorized'}
								</span>
							</div>
						</div>
						<div class="p-6 flex-1 flex flex-col">
							<div class="flex items-center text-sm text-slate-500 mb-3 gap-4">
								<div class="flex items-center gap-1">
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
									{new Date(berita.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
								</div>
								<div class="flex items-center gap-1">
									<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
									{berita.lokasi}
								</div>
							</div>
							<h3 class="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
								{berita.judul}
							</h3>
							<p class="text-slate-600 line-clamp-3 mb-4 flex-1">
								{stripHTML(berita.deskripsi)}
							</p>
							<div class="pt-4 border-t border-slate-100 flex items-center justify-between">
								<a href="/berita/{berita.id}" class="transition-all duration-300 group cursor-pointer flex flex-col focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2">
									<span class="text-blue-600 font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
										Baca selengkapnya <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
									</span>
								</a>
							</div>
						</div>
					</div>
				{/each}
			</div>

		{/if}
	</main>
</div>
