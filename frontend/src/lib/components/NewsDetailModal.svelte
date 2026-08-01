<script lang="ts">
  import { API_URL } from '$lib/api';

  let { selectedBerita, onclose } = $props();

  function handleBackdropClick(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      onclose();
    }
  }
</script>

{#if selectedBerita}
	<!-- Backdrop -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<div 
		class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-default" 
		onclick={handleBackdropClick} 
	>
		<!-- Modal box -->
		<div 
			class="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden shadow-2xl relative flex flex-col animate-in fade-in zoom-in-95 duration-200" 
		>
			<!-- Close button -->
			<button 
				type="button" 
				class="absolute top-4 right-4 bg-white/90 hover:bg-slate-100 text-slate-500 hover:text-slate-800 p-2 rounded-full border border-slate-200 shadow-sm transition-colors z-20 cursor-pointer" 
				onclick={onclose}
				aria-label="Tutup"
			>
				<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
			</button>

			<!-- Header Cover Image -->
			<div class="relative h-64 sm:h-80 w-full bg-slate-100 shrink-0">
				{#if selectedBerita.foto}
					<img src="{API_URL}{selectedBerita.foto}" alt={selectedBerita.judul} class="w-full h-full object-cover" />
				{:else}
					<div class="w-full h-full flex items-center justify-center text-slate-400">
						<svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
					</div>
				{/if}
				<div class="absolute bottom-4 left-6">
					<span class="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-600 text-white shadow-md">
						{selectedBerita.kategori?.nama || 'Uncategorized'}
					</span>
				</div>
			</div>

			<!-- Scrollable content area -->
			<div class="p-6 sm:p-8 overflow-y-auto">
				<!-- Metadata -->
				<div class="flex flex-wrap items-center text-sm text-slate-500 mb-4 gap-4 sm:gap-6">
					<div class="flex items-center gap-1.5">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
						{new Date(selectedBerita.created_at).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
					</div>
					<div class="flex items-center gap-1.5">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
						{selectedBerita.lokasi}
					</div>
				</div>

				<!-- Title -->
				<h2 class="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-6 leading-tight">
					{selectedBerita.judul}
				</h2>

				<hr class="border-slate-100 mb-6" />

				<!-- Full Body Content -->
				<div class="prose prose-slate max-w-none text-slate-700 leading-relaxed font-sans svelte-lexical">
					{@html selectedBerita.deskripsi}
				</div>
			</div>
		</div>
	</div>
{/if}
