import NewsAdminDashboard from './lib/NewsAdminDashboard.svelte';
import NewsCategoryManager from './lib/NewsCategoryManager.svelte';
import { mount } from 'svelte';

declare global {
    interface Window {
        CMS: any;
    }
}

if (typeof window !== 'undefined' && window.CMS) {
    window.CMS.registerMenu({
        name: 'Berita',
        icon: 'newspaper',
        route: '/admin/berita',
        component: NewsAdminDashboard,
        mountFunction: (target: HTMLElement, props: any) => {
            return mount(NewsAdminDashboard, { target, props });
        }
    });

    window.CMS.registerMenu({
        name: 'Kategori',
        icon: 'folder',
        route: '/admin/kategori',
        component: NewsCategoryManager,
        mountFunction: (target: HTMLElement, props: any) => {
            return mount(NewsCategoryManager, { target, props });
        }
    });
}
