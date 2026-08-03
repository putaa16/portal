<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { fetchAPI, API_URL } from '$lib/api';


	let id = $page.params.id;
	let agenda: any = null;
	let loading = true;

	onMount(async () => {
		try {
			agenda = await fetchAPI(`/agenda/${id}`);
		} catch (error) {
			console.error(error);
		} finally {
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>{agenda ? agenda.judul : 'Memuat Agenda...'} - Portal Berita</title>
</svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-900 font-sans">
	<nav class="bg-white shadow-sm border-b border-slate-200 sticky top-0 z-50">
		<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
						<a href="/akreditasi" class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-slate-500 hover:text-slate-700 hover:border-slate-300 transition-all">
							Akreditasi
						</a>
					</div>
				</div>
				<div class="flex items-center">
					<a href="/agenda" class="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors">&larr; Kembali ke Agenda</a>
				</div>
			</div>
		</div>
	</nav>

	<main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
		{#if loading}
			<div class="flex justify-center items-center py-32">
				<div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
			</div>
		{:else if !agenda}
			<div class="text-center py-20 bg-white rounded-2xl border border-slate-200 shadow-sm">
				<p class="text-slate-500 text-lg mb-4">Agenda tidak ditemukan.</p>
				<a href="/agenda" class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">Kembali ke Daftar Agenda</a>
			</div>
		{:else}
			<article class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
				<div class="relative h-96 w-full bg-slate-100">
					{#if agenda.foto}
						<img src="{API_URL}{agenda.foto}" alt={agenda.judul} class="w-full h-full object-cover" />
					{:else}
						<div class="w-full h-full flex items-center justify-center text-slate-400">
							<svg class="w-24 h-24" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
						</div>
					{/if}
					<div class="absolute bottom-4 left-6">
						<span class="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-emerald-600 text-white shadow-md">
							Agenda Kegiatan
						</span>
					</div>
				</div>

				<div class="p-8 sm:p-12">
					<div class="flex flex-wrap items-center text-sm text-slate-500 mb-6 gap-6">
						<div class="flex items-center gap-1.5 font-medium text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-100">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
							Waktu Pelaksanaan: {new Date(agenda.tanggal).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })} WIB
						</div>
					</div>

					<h1 class="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
						{agenda.judul}
					</h1>

					<hr class="border-slate-100 mb-8" />

					<div class="prose prose-slate max-w-none text-slate-700 leading-relaxed font-sans svelte-lexical">
						{@html agenda.deskripsi}
					</div>
				</div>
			</article>
		{/if}
	</main>
</div>
