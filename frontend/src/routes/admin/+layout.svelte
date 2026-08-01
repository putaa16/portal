<script lang="ts">
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import { isAuthenticated } from '$lib/store';
	import { Toaster } from 'svelte-sonner';

	let isMenuOpen = false;

	onMount(() => {
		const token = localStorage.getItem('token');
		if (!token) {
			goto('/login');
		} else {
			isAuthenticated.set(true);
		}
	});

	function handleLogout() {
		localStorage.removeItem('token');
		isAuthenticated.set(false);
		goto('/login');
	}
</script>

<Toaster richColors />

<div class="min-h-screen bg-slate-50 font-sans flex">
	<!-- Sidebar -->
	<aside class="w-64 bg-white border-r border-slate-200 hidden md:block fixed h-full z-10">
		<div class="h-16 flex items-center px-6 border-b border-slate-200">
			<div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl mr-2">P</div>
			<span class="font-bold text-xl text-slate-800">AdminPanel</span>
		</div>
		<div class="p-4 space-y-1">
			<a href="/admin" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:text-blue-600 transition-colors active">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
				Dashboard
			</a>
			<a href="/admin/kategori" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:text-blue-600 transition-colors">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
				Kategori
			</a>
			<a href="/admin/berita" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:text-blue-600 transition-colors">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8"></path></svg>
				Berita
			</a>
			<a href="/admin/agenda" class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 font-medium hover:bg-slate-50 hover:text-blue-600 transition-colors">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
				Agenda
			</a>
		</div>
		<div class="absolute bottom-0 w-full p-4 border-t border-slate-200">
			<button onclick={handleLogout} class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-red-600 font-medium hover:bg-red-50 transition-colors w-full">
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
				Logout
			</button>
		</div>
	</aside>

	<!-- Main Content -->
	<div class="flex-1 md:ml-64 flex flex-col h-screen overflow-hidden">
		<!-- Topbar Mobile -->
		<header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-4 md:hidden">
			<div class="flex items-center gap-2">
				<div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xl">P</div>
			</div>
			<button class="p-2 text-slate-500 rounded-lg hover:bg-slate-50" aria-label="Toggle Menu" onclick={() => isMenuOpen = !isMenuOpen}>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
			</button>
		</header>
		
		{#if isMenuOpen}
			<div class="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1">
				<a href="/admin" class="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-50">Dashboard</a>
				<a href="/admin/kategori" class="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-50">Kategori</a>
				<a href="/admin/berita" class="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-50">Berita</a>
				<a href="/admin/agenda" class="block px-3 py-2 rounded-lg text-slate-700 font-medium hover:bg-slate-50">Agenda</a>
				<button onclick={handleLogout} class="block w-full text-left px-3 py-2 rounded-lg text-red-600 font-medium hover:bg-red-50">Logout</button>
			</div>
		{/if}


		<main class="flex-1 overflow-y-auto p-6 md:p-8">
			<slot />
		</main>
	</div>
</div>
