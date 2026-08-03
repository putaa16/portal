<script lang="ts">
	import { onMount } from 'svelte';

	let { apiBaseUrl = '/api/news' } = $props<{ apiBaseUrl?: string }>();

	let kategoris = $state<any[]>([]);
	let loading = $state(true);
	
	let formNama = $state('');
	let editId = $state<number | null>(null);
	let isModalOpen = $state(false);
	let isSubmitting = $state(false);

	async function fetchAPI(endpoint: string, options: RequestInit = {}) {
		const res = await fetch(`${apiBaseUrl}${endpoint.replace('/admin', '')}`, {
			...options,
			headers: {
				...options.headers,
				'Content-Type': 'application/json'
			}
		});
		if (!res.ok) throw new Error(await res.text());
		return await res.json();
	}

	async function loadKategori() {
		loading = true;
		try {
			kategoris = await fetchAPI('/kategori');
		} catch (error) {
			console.error(error);
			alert('Gagal memuat kategori');
		} finally {
			loading = false;
		}
	}

	onMount(() => {
		loadKategori();
	});

	function openModal(kategori: any = null) {
		if (kategori) {
			editId = kategori.id;
			formNama = kategori.nama;
		} else {
			editId = null;
			formNama = '';
		}
		isModalOpen = true;
	}

	function closeModal() {
		isModalOpen = false;
		editId = null;
		formNama = '';
	}

	async function handleSubmit() {
		if (!formNama.trim()) return;
		isSubmitting = true;

		try {
			if (editId) {
				await fetchAPI(`/admin/kategori/${editId}`, {
					method: 'PUT',
					body: JSON.stringify({ nama: formNama })
				});
			} else {
				await fetchAPI('/admin/kategori', {
					method: 'POST',
					body: JSON.stringify({ nama: formNama })
				});
			}
			closeModal();
			loadKategori();
		} catch (error: any) {
			alert(error.message);
		} finally {
			isSubmitting = false;
		}
	}

	async function handleDelete(id: number) {
		if (!confirm('Apakah Anda yakin ingin menghapus kategori ini?')) return;
		
		try {
			await fetchAPI(`/admin/kategori/${id}`, {
				method: 'DELETE'
			});
			loadKategori();
		} catch (error: any) {
			alert(error.message);
		}
	}
</script>

<div class="space-y-8 animate-in fade-in duration-500">
	<!-- Header Section -->
	<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-gradient-to-r from-slate-900 to-slate-800 p-8 rounded-3xl shadow-xl shadow-slate-200/50">
		<div>
			<h1 class="text-3xl font-extrabold text-white tracking-tight">Kategori Berita</h1>
			<p class="text-slate-300 mt-2 text-sm max-w-md leading-relaxed">Kelola taksonomi dan pengelompokan berita untuk mempermudah navigasi pembaca.</p>
		</div>
		<button onclick={() => openModal()} class="group relative overflow-hidden bg-white hover:bg-slate-50 text-slate-900 px-6 py-3 rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2">
			<div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-slate-200/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
			<svg class="w-5 h-5 text-indigo-600 transition-transform group-hover:rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
			<span class="relative">Kategori Baru</span>
		</button>
	</div>

	<!-- Data Section -->
	<div class="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden relative">
		<!-- Decorative top gradient -->
		<div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-80"></div>
		
		<div class="p-6 border-b border-slate-50 flex items-center justify-between bg-slate-50/50">
			<h2 class="text-lg font-semibold text-slate-800 flex items-center gap-2">
				<svg class="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path></svg>
				Daftar Kategori
			</h2>
			<span class="bg-indigo-50 text-indigo-700 py-1 px-3 rounded-full text-xs font-bold tracking-wide">{kategoris.length} Kategori</span>
		</div>

		<div class="overflow-x-auto">
			<table class="w-full text-left border-collapse">
				<thead>
					<tr class="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-wider font-semibold border-y border-slate-100">
						<th class="px-8 py-4 w-24 text-center">ID</th>
						<th class="px-8 py-4">Nama Kategori</th>
						<th class="px-8 py-4 text-right">Aksi</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-slate-50">
					{#if loading}
						<tr>
							<td colspan="3" class="px-8 py-16 text-center">
								<div class="inline-flex items-center gap-3 text-slate-500">
									<svg class="animate-spin h-5 w-5 text-indigo-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
									<span class="font-medium animate-pulse">Menyiapkan data...</span>
								</div>
							</td>
						</tr>
					{:else if kategoris.length === 0}
						<tr>
							<td colspan="3" class="px-8 py-20 text-center">
								<div class="max-w-xs mx-auto">
									<div class="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100 shadow-inner">
										<svg class="w-10 h-10 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
									</div>
									<h3 class="text-lg font-bold text-slate-800 mb-1">Data Kosong</h3>
									<p class="text-sm text-slate-500 mb-6">Belum ada kategori yang ditambahkan. Silakan buat kategori pertama Anda.</p>
									<button onclick={() => openModal()} class="text-indigo-600 font-semibold hover:text-indigo-700 text-sm transition-colors flex items-center justify-center gap-1 mx-auto">
										<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
										Buat Kategori
									</button>
								</div>
							</td>
						</tr>
					{:else}
						{#each kategoris as kat}
							<tr class="group hover:bg-indigo-50/30 transition-colors duration-200">
								<td class="px-8 py-5 text-center">
									<span class="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-slate-100 text-slate-500 font-mono text-xs font-semibold group-hover:bg-white group-hover:text-indigo-600 group-hover:shadow-sm transition-all">{kat.id}</span>
								</td>
								<td class="px-8 py-5">
									<div class="flex items-center gap-3">
										<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-600 font-bold text-lg shadow-inner">
											{kat.nama.charAt(0).toUpperCase()}
										</div>
										<span class="font-semibold text-slate-800 text-base">{kat.nama}</span>
									</div>
								</td>
								<td class="px-8 py-5 text-right">
									<div class="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
										<button onclick={() => openModal(kat)} class="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors" title="Edit">
											<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
										</button>
										<button onclick={() => handleDelete(kat.id)} class="p-2 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors" title="Hapus">
											<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
										</button>
									</div>
								</td>
							</tr>
						{/each}
					{/if}
				</tbody>
			</table>
		</div>
	</div>
</div>

<!-- Modal Form -->
{#if isModalOpen}
	<div class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-0">
		<div class="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" aria-hidden="true" onclick={closeModal}></div>

		<div class="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all animate-in zoom-in-95 duration-200">
			<!-- Modal Header with gradient -->
			<div class="px-8 py-6 bg-gradient-to-b from-slate-50 to-white border-b border-slate-100">
				<h3 class="text-xl font-bold text-slate-800 flex items-center gap-3">
					<div class="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
					</div>
					{editId ? 'Ubah Kategori' : 'Kategori Baru'}
				</h3>
			</div>

			<form onsubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
				<div class="px-8 py-6 space-y-5">
					<div>
						<label for="nama" class="block text-sm font-semibold text-slate-700 mb-2">Nama Kategori</label>
						<div class="relative">
							<input type="text" id="nama" bind:value={formNama} required
								class="block w-full border border-slate-200 rounded-xl px-4 py-3 pl-11 shadow-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-slate-50 focus:bg-white"
								placeholder="Contoh: Teknologi Terkini"
							/>
							<svg class="w-5 h-5 text-slate-400 absolute left-4 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
						</div>
					</div>
				</div>
				<div class="px-8 py-5 bg-slate-50 flex flex-col-reverse sm:flex-row justify-end gap-3 rounded-b-3xl">
					<button type="button" onclick={closeModal} class="px-5 py-2.5 text-sm font-semibold text-slate-600 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 w-full sm:w-auto">
						Batal
					</button>
					<button type="submit" disabled={isSubmitting} class="px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 w-full sm:w-auto disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2">
						{#if isSubmitting}
							<svg class="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
							Menyimpan...
						{:else}
							Simpan Kategori
						{/if}
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}

<style>
	@keyframes shimmer {
		100% { transform: translateX(100%); }
	}
</style>
