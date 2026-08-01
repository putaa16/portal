<script lang="ts">
  import { FocusEditor } from "svelte-lexical";
  import { getEditor, getActiveEditor } from "svelte-lexical";
  import { tick } from "svelte";
  import { 
    CloseCircleButton, 
    ModalDialog, 
    InsertImageUriDialogBody, 
    InsertImageUploadedDialogBody 
  } from "svelte-lexical";

  const editor = getEditor();
  const activeEditor = getActiveEditor();
  
  let showModal = $state(false);
  let mode = $state<'menu' | 'url' | 'file'>('menu');

  export function open() {
    mode = 'menu';
    showModal = true;
  }

  async function close() {
    showModal = false;
    await tick();
    FocusEditor(editor);
  }

  // Register our custom open function on editor extensions
  editor.extensions.openInsertImageDialog = open;
</script>

<ModalDialog bind:showModal>
  <CloseCircleButton onclick={close} />

  {#if mode === 'menu'}
    <div class="modal w-[24em] p-6 text-center">
      <h2 class="Modal__title text-xl font-bold text-slate-800 mb-6">Insert Image</h2>
      <div class="flex flex-col gap-4">
        <button 
          type="button" 
          class="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors border border-slate-200 cursor-pointer"
          onclick={() => mode = 'url'}
        >
          URL
        </button>
        <button 
          type="button" 
          class="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg transition-colors border border-slate-200 cursor-pointer"
          onclick={() => mode = 'file'}
        >
          File
        </button>
      </div>
    </div>
  {:else if mode === 'url'}
    <div class="relative">
      <InsertImageUriDialogBody onconfirm={close} />
      <button 
        type="button" 
        class="absolute bottom-4 left-4 text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors cursor-pointer"
        onclick={() => mode = 'menu'}
      >
        &larr; Back
      </button>
    </div>
  {:else if mode === 'file'}
    <div class="relative">
      <InsertImageUploadedDialogBody onconfirm={close} />
      <button 
        type="button" 
        class="absolute bottom-4 left-4 text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors cursor-pointer"
        onclick={() => mode = 'menu'}
      >
        &larr; Back
      </button>
    </div>
  {/if}
</ModalDialog>

<style>
  .modal {
    margin: 0 auto;
  }
</style>
