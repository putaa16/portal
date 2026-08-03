### 1. Format File Unggahan
Plugin harus diunggah dalam bentuk **satu arsip `.zip`**, bukan folder *source code* (.go atau .svelte) mentah. 

Struktur wajib di dalam ZIP:
```text
nama-plugin.zip/
├── manifest.json         # WAJIB: Informasi plugin (nama, versi, author, rute)
├── backend/
│   ├── plugin.exe        # Biner hasil kompilasi Golang (Windows)
│   └── plugin-linux      # Biner hasil kompilasi Golang (Linux)
├── frontend/
│   ├── bundle.js         # UI komponen Svelte hasil kompilasi (Web Component / ES Module)
│   └── style.css         # (Opsional) Styling terpisah
└── database/
    └── init.sql          # (Opsional) Query SQL untuk migrasi/pembuatan tabel
```

### 2. Aturan Backend (Golang)
- Plugin **tidak boleh** menempel (di-*import*) langsung ke dalam file Fiber CMS.
- Plugin **harus** berupa aplikasi mandiri (`package main` dan `func main()`).
- Plugin berkomunikasi dengan CMS menggunakan `hashicorp/go-plugin` (protokol RPC).
- Plugin wajib mengimplementasikan antarmuka (*interface*) `CMSPlugin` yang disediakan oleh `backend/pkg/pluginsdk` milik CMS Utama.

### 3. Aturan Frontend (Svelte)
- Anda **tidak boleh** mengirimkan file `.svelte`.
- Lakukan konfigurasi *Library Build Mode* pada Vite (di `vite.config.ts`) agar kode Svelte Anda berubah menjadi satu file `bundle.js` statis.
- File `bundle.js` ini akan dipanggil secara otomatis oleh *Plugin Loader* CMS melalui injeksi `<script type="module">`.
- Plugin wajib mendaftarkan komponennya menggunakan antarmuka global yang disediakan CMS, contohnya: `window.CMS.registerMenu(...)`.