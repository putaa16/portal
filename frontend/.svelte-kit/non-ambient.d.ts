
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/admin" | "/admin/berita" | "/admin/kategori" | "/login";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/admin": Record<string, never>;
			"/admin/berita": Record<string, never>;
			"/admin/kategori": Record<string, never>;
			"/login": Record<string, never>
		};
		Pathname(): "/" | "/admin" | "/admin/berita" | "/admin/kategori" | "/login";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/images/icons/3-columns.svg" | "/images/icons/add-sign.svg" | "/images/icons/arrow-clockwise.svg" | "/images/icons/arrow-counterclockwise.svg" | "/images/icons/bg-color.svg" | "/images/icons/bluesky.svg" | "/images/icons/camera.svg" | "/images/icons/card-checklist.svg" | "/images/icons/caret-right-fill.svg" | "/images/icons/chat-left-text.svg" | "/images/icons/chat-right-dots.svg" | "/images/icons/chat-right-text.svg" | "/images/icons/chat-right.svg" | "/images/icons/chat-square-quote.svg" | "/images/icons/chevron-down.svg" | "/images/icons/clipboard.svg" | "/images/icons/close.svg" | "/images/icons/code.svg" | "/images/icons/comments.svg" | "/images/icons/copy.svg" | "/images/icons/diagram-2.svg" | "/images/icons/download.svg" | "/images/icons/draggable-block-menu.svg" | "/images/icons/dropdown-more.svg" | "/images/icons/figma.svg" | "/images/icons/file-earmark-text.svg" | "/images/icons/file-image.svg" | "/images/icons/filetype-gif.svg" | "/images/icons/font-color.svg" | "/images/icons/font-family.svg" | "/images/icons/gear.svg" | "/images/icons/highlighter.svg" | "/images/icons/horizontal-rule.svg" | "/images/icons/indent.svg" | "/images/icons/journal-code.svg" | "/images/icons/journal-text.svg" | "/images/icons/justify.svg" | "/images/icons/link.svg" | "/images/icons/list-ol.svg" | "/images/icons/list-ul.svg" | "/images/icons/lock-fill.svg" | "/images/icons/lock.svg" | "/images/icons/markdown.svg" | "/images/icons/mic.svg" | "/images/icons/minus-sign.svg" | "/images/icons/outdent.svg" | "/images/icons/paint-bucket.svg" | "/images/icons/palette.svg" | "/images/icons/pencil-fill.svg" | "/images/icons/plug-fill.svg" | "/images/icons/plug.svg" | "/images/icons/plus-slash-minus.svg" | "/images/icons/plus.svg" | "/images/icons/prettier-error.svg" | "/images/icons/prettier.svg" | "/images/icons/scissors.svg" | "/images/icons/send.svg" | "/images/icons/square-check.svg" | "/images/icons/sticky.svg" | "/images/icons/success-alt.svg" | "/images/icons/success.svg" | "/images/icons/table.svg" | "/images/icons/text-center.svg" | "/images/icons/text-left.svg" | "/images/icons/text-paragraph.svg" | "/images/icons/text-right.svg" | "/images/icons/trash.svg" | "/images/icons/trash3.svg" | "/images/icons/type-bold.svg" | "/images/icons/type-capitalize.svg" | "/images/icons/type-h1.svg" | "/images/icons/type-h2.svg" | "/images/icons/type-h3.svg" | "/images/icons/type-h4.svg" | "/images/icons/type-h5.svg" | "/images/icons/type-h6.svg" | "/images/icons/type-italic.svg" | "/images/icons/type-lowercase.svg" | "/images/icons/type-strikethrough.svg" | "/images/icons/type-subscript.svg" | "/images/icons/type-superscript.svg" | "/images/icons/type-underline.svg" | "/images/icons/type-uppercase.svg" | "/images/icons/upload.svg" | "/images/icons/user.svg" | "/images/icons/vertical-bottom.svg" | "/images/icons/vertical-middle.svg" | "/images/icons/vertical-top.svg" | "/images/icons/x.svg" | "/images/icons/youtube.svg" | string & {};
	}
}