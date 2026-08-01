<script lang="ts">
  import { onMount } from 'svelte';
  import { 
    Composer, 
    ContentEditable, 
    RichTextPlugin, 
    HistoryPlugin, 
    ListPlugin, 
    CheckListPlugin,
    HorizontalRulePlugin,
    ImagePlugin,
    LinkPlugin,
    AutoLinkPlugin,
    CodeHighlightPrismPlugin,
    ColumnLayoutPlugin,
    TablePlugin,
    TableActionMenuPlugin,
    TableHoverActionPlugin,
    TableCellResizerPlugin,
    YoutubePlugin,
    TwitterPlugin,
    BlueskyPlugin,
    TabIndentationPlugin,
    MarkdownShortcutPlugin,
    HashtagPlugin,
    // Toolbar components
    Toolbar,
    UndoButton,
    RedoButton,
    BlockFormatDropDown,
    FontFamilyDropDown,
    FontSizeDropDown,
    BoldButton,
    ItalicButton,
    UnderlineButton,
    StrikethroughButton,
    Divider,
    InsertLink,
    DropDownTextColorPicker,
    DropDownBackColorPicker,
    MoreStylesDropDown,
    InsertDropDown,
    DropDownAlign,
    // Dropdown Items
    ParagraphDropDownItem,
    HeadingDropDownItem,
    BulletDropDrownItem,
    NumberDropDrownItem,
    CheckDropDrownItem,
    QuoteDropDrownItem,
    CodeDropDrownItem,
    InsertHRDropDownItem,
    InsertImageDropDownItem,
    InsertColumnLayoutDropDownItem,
    InsertTableDropDownItem,
    InsertYoutubeDropDownItem,
    InsertTweetDropDownItem,
    InsertBlueskyDropDownItem,
    StrikethroughDropDownItem,
    SubscriptDropDownItem,
    SuperscriptDropDownItem,
    ClearFormattingDropDownItem,
    // Dialogs
    InsertColumnsDialog,
    InsertTableDialog,
    InsertYoutubeDialog,
    InsertTweetDialog,
    InsertBlueskyDialog,
    CaptionEditorHistoryPlugin
  } from 'svelte-lexical';
  import { theme } from 'svelte-lexical/dist/themes/default';
  import InsertImageDialog from './InsertImageDialog.svelte';
  import { 
    HeadingNode, 
    QuoteNode, 
    ListNode, 
    ListItemNode,
    HorizontalRuleNode,
    ImageNode,
    AutoLinkNode,
    LinkNode,
    CodeNode,
    CodeHighlightNode,
    LayoutContainerNode,
    LayoutItemNode,
    TableNode,
    TableRowNode,
    TableCellNode,
    YouTubeNode,
    TweetNode,
    BlueskyNode,
    HashtagNode
  } from 'svelte-lexical';

  import { $getRoot as getRoot } from 'lexical';
  import { $generateHtmlFromNodes as generateHtmlFromNodes, $generateNodesFromDOM as generateNodesFromDOM } from '@lexical/html';

  let { value = $bindable() }: { value: string } = $props();

  const initialConfig = {
    theme: theme,
    namespace: 'PortalBeritaFullEditor',
    nodes: [
      HeadingNode,
      QuoteNode,
      ListNode,
      ListItemNode,
      HorizontalRuleNode,
      ImageNode,
      AutoLinkNode,
      LinkNode,
      CodeNode,
      CodeHighlightNode,
      LayoutContainerNode,
      LayoutItemNode,
      TableNode,
      TableRowNode,
      TableCellNode,
      YouTubeNode,
      TweetNode,
      BlueskyNode,
      HashtagNode
    ],
    onError: (error: Error) => {
      console.error(error);
    }
  };

  let composer = $state<any>(undefined);
  let editorContainerRef = $state<HTMLElement | undefined>(undefined);
  let isInitialLoad = true;

  function isEditorFocused(editor: any): boolean {
    if (typeof document === 'undefined') return false;
    const rootEl = editor.getRootElement();
    if (!rootEl) return false;
    const activeEl = document.activeElement;
    return rootEl === activeEl || rootEl.contains(activeEl);
  }

  onMount(() => {
    if (!composer) return;
    const editor = composer.getEditor();

    // 1. Load initial HTML value into editor
    if (value) {
      editor.update(() => {
        const parser = new DOMParser();
        const dom = parser.parseFromString(value, 'text/html');
        const nodes = generateNodesFromDOM(editor, dom);
        const root = getRoot();
        root.clear();
        root.append(...nodes);
      });
    }
    isInitialLoad = false;

    // 2. Register update listener to update `value` prop
    const unregister = editor.registerUpdateListener(({ editorState }: { editorState: any }) => {
      if (isInitialLoad) return;
      editorState.read(() => {
        const html = generateHtmlFromNodes(editor, null);
        if (value !== html) {
          value = html;
        }
      });
    });

    return () => {
      unregister();
    };
  });

  // Watch for external value changes (e.g. when switching news items/opening modal)
  $effect(() => {
    if (!composer) return;
    const editor = composer.getEditor();
    
    // Check if the HTML inside the editor matches the new value
    let currentHtml = '';
    editor.getEditorState().read(() => {
      currentHtml = generateHtmlFromNodes(editor, null);
    });

    const isFocused = isEditorFocused(editor);

    if (value !== currentHtml && !isFocused && !isInitialLoad) {
      editor.update(() => {
        const parser = new DOMParser();
        const dom = parser.parseFromString(value || '', 'text/html');
        const nodes = generateNodesFromDOM(editor, dom);
        const root = getRoot();
        root.clear();
        root.append(...nodes);
      });
    }
  });
</script>

<Composer {initialConfig} bind:this={composer}>
  <div class="editor-shell svelte-lexical border border-slate-300 rounded-lg bg-white overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 relative">
    <Toolbar>
      {#snippet children({editor, activeEditor, blockType})}
        <UndoButton />
        <RedoButton />
        <Divider />
        <BlockFormatDropDown>
          <ParagraphDropDownItem />
          <HeadingDropDownItem headingSize="h1" />
          <HeadingDropDownItem headingSize="h2" />
          <HeadingDropDownItem headingSize="h3" />
          <BulletDropDrownItem />
          <NumberDropDrownItem />
          <CheckDropDrownItem />
          <QuoteDropDrownItem />
          <CodeDropDrownItem />
        </BlockFormatDropDown>
        <Divider />
        <FontFamilyDropDown />
        <FontSizeDropDown />
        <Divider />
        <BoldButton />
        <ItalicButton />
        <UnderlineButton />
        <StrikethroughButton />
        <Divider />
        <DropDownTextColorPicker />
        <DropDownBackColorPicker />
        <Divider />
        <InsertLink />
        <InsertDropDown>
          <InsertHRDropDownItem />
          <InsertImageDropDownItem />
          <InsertTableDropDownItem />
          <InsertColumnLayoutDropDownItem />
          <InsertYoutubeDropDownItem />
          <InsertTweetDropDownItem />
          <InsertBlueskyDropDownItem />
        </InsertDropDown>
        <MoreStylesDropDown>
          <StrikethroughDropDownItem />
          <SubscriptDropDownItem />
          <SuperscriptDropDownItem />
          <ClearFormattingDropDownItem />
        </MoreStylesDropDown>
        <Divider />
        <DropDownAlign />

        <!-- Dialog Components (Required by Insert Actions to register trigger functions, placed here for activeEditor context) -->
        <InsertImageDialog />
        <InsertColumnsDialog />
        <InsertTableDialog />
        <InsertYoutubeDialog />
        <InsertTweetDialog />
        <InsertBlueskyDialog />
      {/snippet}
    </Toolbar>
    <div class="editor-container relative border-t border-slate-200" bind:this={editorContainerRef}>
      <div class="editor-scroller min-h-[350px] max-h-[600px] overflow-y-auto">
        <div class="editor prose max-w-none w-full">
          <ContentEditable className="ContentEditable__root focus:outline-none p-4 min-h-[350px]" />
        </div>
      </div>
      <RichTextPlugin />
      <HistoryPlugin />
      <ListPlugin />
      <CheckListPlugin />
      <HorizontalRulePlugin />
      <ImagePlugin captionsEnabled={true}>
        <CaptionEditorHistoryPlugin />
      </ImagePlugin>
      <LinkPlugin />
      <AutoLinkPlugin />
      <CodeHighlightPrismPlugin />
      <ColumnLayoutPlugin />
      <TablePlugin />
      {#if editorContainerRef}
        <TableActionMenuPlugin anchorElem={editorContainerRef!} />
        <TableHoverActionPlugin anchorElem={editorContainerRef!} />
      {/if}
      <TableCellResizerPlugin />
      <YoutubePlugin />
      <TwitterPlugin />
      <BlueskyPlugin />
      <TabIndentationPlugin />
      <MarkdownShortcutPlugin />
      <HashtagPlugin />
    </div>
  </div>
</Composer>

<style>
  :global(.editor-shell) {
    display: flex;
    flex-direction: column;
  }

  /* Premium Toolbar Overrides */
  :global(.svelte-lexical .toolbar) {
    height: auto !important;
    min-height: 44px !important;
    flex-wrap: wrap !important;
    overflow-y: visible !important;
    gap: 4px !important;
    padding: 8px !important;
    background-color: #f8fafc !important; /* Slate 50 */
    border: none !important;
    border-bottom: 1px solid #e2e8f0 !important; /* Slate 200 */
    border-top-left-radius: 8px !important;
    border-top-right-radius: 8px !important;
  }

  :global(.svelte-lexical button.toolbar-item) {
    border-radius: 6px !important;
    padding: 6px 8px !important;
    margin-right: 0 !important;
    transition: all 0.15s ease !important;
    color: #475569 !important; /* Slate 600 */
  }

  :global(.svelte-lexical button.toolbar-item:hover:not([disabled])) {
    background-color: #f1f5f9 !important; /* Slate 100 */
    color: #0f172a !important; /* Slate 900 */
  }

  :global(.svelte-lexical button.toolbar-item.active) {
    background-color: #e2e8f0 !important; /* Slate 200 */
    color: #1e3a8a !important; /* Dark blue text for active */
  }

  :global(.svelte-lexical button.toolbar-item i.format) {
    opacity: 0.8 !important;
  }

  :global(.svelte-lexical button.toolbar-item.active i.format) {
    opacity: 1 !important;
  }

  :global(.svelte-lexical .divider) {
    background-color: #e2e8f0 !important; /* Slate 200 */
    width: 1px !important;
    height: 24px !important;
    margin: auto 6px !important;
    align-self: center !important;
  }

  /* Dropdown Styles (Applied globally as dropdowns are mounted via Portal to document.body) */
  :global(.svelte-lexical.dropdown) {
    background-color: #ffffff !important;
    border: 1px solid #cbd5e1 !important; /* Slate-300 */
    border-radius: 8px !important;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1) !important;
    z-index: 9999 !important;
    padding: 6px !important;
    min-width: 160px !important;
  }

  :global(.svelte-lexical.dropdown .item) {
    border-radius: 6px !important;
    transition: all 0.15s ease !important;
    padding: 8px 12px !important;
    color: #334155 !important; /* slate-700 */
    background-color: #ffffff !important;
  }

  :global(.svelte-lexical.dropdown .item:hover) {
    background-color: #f1f5f9 !important; /* slate-100 */
    color: #0f172a !important; /* slate-900 */
  }

  :global(.svelte-lexical.dropdown .item.active) {
    background-color: #e2e8f0 !important; /* slate-200 */
    color: #1e3a8a !important;
  }

  :global(.svelte-lexical.dropdown .divider) {
    background-color: #e2e8f0 !important;
    height: 1px !important;
    margin: 6px 0 !important;
  }

  /* Content Area */
  :global(.ContentEditable__root) {
    min-height: 350px !important;
    padding: 20px !important;
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
    font-size: 16px !important;
    line-height: 1.75 !important;
    color: #1e293b !important; /* Slate 800 */
    outline: none !important;
  }

  /* Headings & elements inside Lexical */
  :global(.ContentEditable__root h1) {
    font-size: 1.875rem !important;
    font-weight: 700 !important;
    margin-top: 1.5rem !important;
    margin-bottom: 1rem !important;
    color: #0f172a !important;
  }

  :global(.ContentEditable__root h2) {
    font-size: 1.5rem !important;
    font-weight: 600 !important;
    margin-top: 1.25rem !important;
    margin-bottom: 0.75rem !important;
    color: #0f172a !important;
  }

  :global(.ContentEditable__root h3) {
    font-size: 1.25rem !important;
    font-weight: 600 !important;
    margin-top: 1rem !important;
    margin-bottom: 0.5rem !important;
    color: #0f172a !important;
  }

  :global(.ContentEditable__root p) {
    margin-top: 0 !important;
    margin-bottom: 1rem !important;
  }

  :global(.ContentEditable__root ul) {
    list-style-type: disc !important;
    padding-left: 1.5rem !important;
    margin-bottom: 1rem !important;
  }

  :global(.ContentEditable__root ol) {
    list-style-type: decimal !important;
    padding-left: 1.5rem !important;
    margin-bottom: 1rem !important;
  }
</style>
