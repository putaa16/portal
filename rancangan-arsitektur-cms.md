# Rancangan Arsitektur Sistem Plugin Dinamis CMS (ala WordPress)

Dokumen ini menjelaskan rancangan arsitektur tingkat tinggi untuk mengubah CMS berbasis Golang (Backend) dan Svelte (Frontend) dari sistem *Modular Monolith* menjadi **Sistem Plugin Dinamis**.

Dengan arsitektur ini, pengguna dapat mengunggah file `.zip` atau `.rar` berisi plugin melalui *dashboard* admin, dan plugin akan langsung berjalan tanpa perlu *restart* atau *build* ulang server.

---

## 1. Anatomi File Plugin (Yang Diunggah)

Pembuat plugin tidak lagi mengirimkan *source code* mentah. Mereka wajib melakukan *build* dan membungkusnya menjadi satu arsip (misal: `berita-plugin.zip`) yang berisi:

```text
berita-plugin.zip/
├── manifest.json         # WAJIB: Informasi plugin (nama, versi, author, rute UI)
├── backend/
│   ├── plugin-windows.exe  # (Opsi 1: RPC Binary) Biner hasil compile untuk Windows
│   ├── plugin-linux        # (Opsi 1: RPC Binary) Biner hasil compile untuk Linux
│   └── plugin.wasm         # (Opsi 2: WASM) Alternatif jika menggunakan WebAssembly
├── frontend/
│   ├── bundle.js         # UI yang sudah dicompile (Web Component / ES Module)
│   └── style.css         # Styling khusus plugin (opsional)
└── assets/               # Gambar atau aset statis lainnya
```

---

## 2. Arsitektur Backend (Golang)

Golang pada dasarnya adalah *compiled language* statis, sehingga *dynamic loading* cukup menantang. Ada dua pendekatan utama untuk arsitektur backend dinamis:

### Pendekatan yang Disarankan: Sistem RPC (HashiCorp `go-plugin`)
Ini adalah standar industri untuk sistem plugin Golang (digunakan oleh Terraform, Vault, dll).
*   **Cara Kerja**: 
    1. Plugin Golang di-*build* menjadi program *executable* mandiri (`.exe` atau biner linux).
    2. Saat plugin diaktifkan, **CMS Core (Host)** akan menjalankan biner plugin tersebut sebagai *background process*.
    3. Host dan Plugin berkomunikasi melalui protokol jaringan lokal (gRPC/RPC) menggunakan *interface* yang sudah disepakati.
*   **Kelebihan**: Sangat stabil, *crash* pada plugin tidak akan mematikan CMS utama, mendukung penuh semua pustaka Golang (termasuk koneksi database).
*   **Kekurangan**: Membutuhkan alokasi memori sedikit lebih besar karena setiap plugin adalah proses OS yang terpisah.

### Alur Kerja Backend (Plugin Manager):
1. **Upload & Ekstrak**: Admin mengunggah `.zip`. Backend mengekstrak ke folder `/plugins/aktif/berita`.
2. **Validasi**: Backend membaca `manifest.json` untuk memastikan kompatibilitas.
3. **Registrasi**: Backend menyimpan data plugin aktif ke Database.
4. **Eksekusi**: Backend menjalankan *binary* plugin (via RPC) atau me-load `.wasm` ke dalam *Wazero Runtime*.
5. **Routing Dinamis**: Backend menambahkan rute API baru secara dinamis berdasarkan instruksi dari plugin (misal: `/api/plugins/berita/articles`).

---

## 3. Arsitektur Frontend (Svelte)

Frontend harus diubah agar dapat memuat antarmuka pengguna (UI) secara dinamis tanpa perlu me-*load* ulang halaman (SPA tetap terjaga).

### Konsep: Dynamic Module Loading & Web Components
*   **Build Plugin**: Kode `.svelte` pada plugin di-*build* menggunakan Vite/Rollup untuk menghasilkan satu file `bundle.js`. File ini didesain sebagai *Web Component* (Custom Element) atau Modul Javascript standar.
*   **Slot / Hook System**: CMS Frontend utama harus memiliki "lubang-lubang" (Slots) yang bisa diisi oleh plugin. Misalnya:
    *   `SidebarHook`: Tempat plugin menambahkan menu di sidebar kiri.
    *   `DashboardHook`: Tempat plugin menambahkan *widget* di beranda admin.
    *   `RouterHook`: Tempat plugin mendaftarkan halaman halamannya sendiri (misal: `/admin/berita`).

### Alur Kerja Frontend (Plugin Loader):
1. **Inisialisasi**: Saat pengguna membuka web admin, Svelte melakukan *fetch* ke Backend: `GET /api/plugins/active`.
2. **Dynamic Import**: Backend merespons daftar plugin aktif beserta URL *file Javascript*-nya (misal: `/static/plugins/berita/bundle.js`).
3. **Injeksi**: Svelte menginjeksi tag `<script type="module" src="...">` ke dalam dokumen secara dinamis.
4. **Mounting**: Setelah `bundle.js` termuat, plugin akan mendaftarkan komponen UI-nya ke dalam *Store* atau *Slot* milik CMS utama. Menu "Berita" pun seketika muncul di Sidebar.

---

## 4. Perubahan yang Diperlukan (Skala Proyek)

Jika kita menyetujui arsitektur ini, berikut adalah pekerjaan yang harus dilakukan:

### Tahap 1: Standardisasi (SDK)
*   Membuat **Plugin SDK** (Golang Interface & NPM Package). Ini adalah aturan baku agar plugin dan CMS bisa saling berkomunikasi.

### Tahap 2: Modifikasi CMS Utama
*   **Backend**: Membangun modul `Plugin Manager` untuk upload `.zip`, baca manifest, manajemen proses gRPC, dan *dynamic routing* Echo.
*   **Frontend**: Membangun modul `Plugin Loader` untuk mengambil data plugin aktif dari backend, *dynamic script injection*, dan pembuatan arsitektur *Store/Slot* untuk menampung menu dari luar.

### Tahap 3: Adaptasi Plugin
*   Merombak kode `plugin-berita` agar mematuhi aturan SDK Backend.
*   Merombak kode `svelte-plugin-berita` agar mematuhi aturan SDK Frontend dan mengubah konfigurasi Vite untuk *build* ke Web Component / modul statis tunggal.
