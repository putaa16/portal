<script lang="ts">
	import { goto } from '$app/navigation';
	import { fetchAPI } from '$lib/api';
	import { isAuthenticated } from '$lib/store';

	let username = '';
	let password = '';
	let error = '';
	let loading = false;

	async function handleLogin() {
		loading = true;
		error = '';

		try {
			const res = await fetchAPI('/login', {
				method: 'POST',
				body: JSON.stringify({ username, password })
			});

			if (res.token) {
				localStorage.setItem('token', res.token);
				isAuthenticated.set(true);
				goto('/admin');
			}
		} catch (err: any) {
			error = err.message || 'Gagal login. Silakan periksa kembali kredensial Anda.';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Admin Login - Portal Berita</title>
</svelte:head>

<div class="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
	<div class="sm:mx-auto sm:w-full sm:max-w-md">
		<div class="flex justify-center mb-6">
			<div class="w-16 h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-bold text-3xl shadow-lg">P</div>
		</div>
		<h2 class="mt-6 text-center text-3xl font-extrabold text-slate-900">
			Login Admin
		</h2>
		<p class="mt-2 text-center text-sm text-slate-600">
			Portal Berita Content Management System
		</p>
	</div>

	<div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
		<div class="bg-white py-8 px-4 shadow-xl shadow-slate-200/50 sm:rounded-2xl sm:px-10 border border-slate-100">
			<form class="space-y-6" on:submit|preventDefault={handleLogin}>
				{#if error}
					<div class="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-start gap-3">
						<svg class="w-5 h-5 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
						{error}
					</div>
				{/if}

				<div>
					<label for="username" class="block text-sm font-medium text-slate-700">
						Username
					</label>
					<div class="mt-1">
						<input id="username" name="username" type="text" required bind:value={username}
							class="appearance-none block w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
							placeholder="Masukkan username admin"
						/>
					</div>
				</div>

				<div>
					<label for="password" class="block text-sm font-medium text-slate-700">
						Password
					</label>
					<div class="mt-1">
						<input id="password" name="password" type="password" required bind:value={password}
							class="appearance-none block w-full px-3 py-2.5 border border-slate-300 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors"
							placeholder="Masukkan password admin"
						/>
					</div>
				</div>

				<div>
					<button type="submit" disabled={loading}
						class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors">
						{#if loading}
							<svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
								<circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
								<path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
							</svg>
							Memproses...
						{:else}
							Masuk Dashboard
						{/if}
					</button>
				</div>
			</form>
		</div>
		
		<div class="mt-8 text-center">
			<a href="/" class="text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1">
				<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
				Kembali ke Halaman Utama
			</a>
		</div>
	</div>
</div>
