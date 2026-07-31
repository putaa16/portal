<svelte:head>
	<title>Dashboard - Admin Panel</title>
</svelte:head>

<div>
	<h1 class="text-3xl font-bold text-slate-900 mb-8">Selamat Datang di Admin Panel</h1>
	
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		<a href="/admin/kategori" class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-300 transition-all group">
			<div class="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
			</div>
			<h3 class="text-lg font-semibold text-slate-800">Manajemen Kategori</h3>
			<p class="text-slate-500 mt-1 text-sm">Kelola daftar kategori untuk berita yang akan diterbitkan.</p>
		</a>

		<a href="/admin/berita" class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:indigo-300 transition-all group">
			<div class="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8"></path></svg>
			</div>
			<h3 class="text-lg font-semibold text-slate-800">Manajemen Berita</h3>
			<p class="text-slate-500 mt-1 text-sm">Tulis, edit, dan publikasikan berita terbaru di portal Anda.</p>
		</a>
		
		<a href="/" target="_blank" class="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:emerald-300 transition-all group">
			<div class="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
			</div>
			<h3 class="text-lg font-semibold text-slate-800">Lihat Halaman Publik</h3>
			<p class="text-slate-500 mt-1 text-sm">Buka halaman depan portal berita di tab baru.</p>
		</a>
	</div>
</div>
