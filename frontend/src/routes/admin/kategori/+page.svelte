<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchAPI } from '$lib/api';

	let kategoris: any[] = [];
	let loading = true;
	
	let formNama = '';
	let editId: number | null = null;
	let isModalOpen = false;
	let isSubmitting = false;

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

<svelte:head>
	<title>Manajemen Kategori - Admin Panel</title>
</svelte:head>

<div class="mb-6 flex justify-between items-center">
	<div>
		<h1 class="text-2xl font-bold text-slate-900">Kategori Berita</h1>
		<p class="text-slate-500 text-sm mt-1">Kelola data kategori berita di sistem.</p>
	</div>
	<button on:click={() => openModal()} class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 shadow-sm">
		<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
		Tambah Kategori
	</button>
</div>

<div class="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
	<div class="overflow-x-auto">
		<table class="min-w-full divide-y divide-slate-200">
			<thead class="bg-slate-50">
				<tr>
					<th scope="col" class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider w-16">ID</th>
					<th scope="col" class="px-6 py-3 text-left text-xs font-semibold text-slate-500 uppercase tracking-wider">Nama Kategori</th>
					<th scope="col" class="px-6 py-3 text-right text-xs font-semibold text-slate-500 uppercase tracking-wider w-32">Aksi</th>
				</tr>
			</thead>
			<tbody class="bg-white divide-y divide-slate-200">
				{#if loading}
					<tr>
						<td colspan="3" class="px-6 py-12 text-center text-slate-500">Memuat data...</td>
					</tr>
				{:else if kategoris.length === 0}
					<tr>
						<td colspan="3" class="px-6 py-12 text-center text-slate-500">Belum ada kategori.</td>
					</tr>
				{:else}
					{#each kategoris as kat}
						<tr class="hover:bg-slate-50 transition-colors">
							<td class="px-6 py-4 whitespace-nowrap text-sm text-slate-500">{kat.id}</td>
							<td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900">{kat.nama}</td>
							<td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
								<button on:click={() => openModal(kat)} class="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
								<button on:click={() => handleDelete(kat.id)} class="text-red-600 hover:text-red-900">Hapus</button>
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
	<div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
		<div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			<div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity" aria-hidden="true" on:click={closeModal}></div>

			<span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

			<div class="relative z-10 inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
				<form on:submit|preventDefault={handleSubmit}>
					<div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
						<div class="sm:flex sm:items-start">
							<div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
								<h3 class="text-lg leading-6 font-medium text-slate-900" id="modal-title">
									{editId ? 'Edit Kategori' : 'Tambah Kategori Baru'}
								</h3>
								<div class="mt-4">
									<label for="nama" class="block text-sm font-medium text-slate-700">Nama Kategori</label>
									<input type="text" id="nama" bind:value={formNama} required
										class="mt-1 block w-full border border-slate-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
										placeholder="Misal: Teknologi, Olahraga"
									/>
								</div>
							</div>
						</div>
					</div>
					<div class="bg-slate-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse rounded-b-2xl">
						<button type="submit" disabled={isSubmitting} class="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50">
							{isSubmitting ? 'Menyimpan...' : 'Simpan'}
						</button>
						<button type="button" on:click={closeModal} class="mt-3 w-full inline-flex justify-center rounded-lg border border-slate-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-slate-700 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
							Batal
						</button>
					</div>
				</form>
			</div>
		</div>
	</div>
{/if}
