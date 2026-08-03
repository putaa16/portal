# Penjelasan Sistem Plugin: Modular Monolith vs Dinamis (ala WordPress)

Pesan kesimpulan tersebut pada dasarnya membandingkan **dua cara berbeda** bagaimana sebuah CMS memasang dan menjalankan sebuah plugin. Mari kita bedah perbedaannya agar lebih mudah dipahami:

---

## 1. Modular Monolith (Cara yang Anda Lakukan Saat Ini)

**Bagaimana kerjanya?**
Dalam sistem *Modular Monolith*, file yang Anda paketkan ke dalam RAR adalah **kode sumber mentah** (file `.go` untuk backend dan `.svelte` untuk frontend). Ketika plugin tersebut ingin dipasang, folder-folder tersebut harus dimasukkan ke dalam *source code* CMS utama.

*   **Analogi:** Bayangkan Anda sedang membangun sebuah mobil (CMS). Untuk memasang radio (plugin), Anda memberikan *blue-print* dan komponen mentah radio kepada pabrik. Pabrik harus merakit mobil beserta radionya secara bersamaan dari nol.
*   **Proses Pemasangan:**
    1. Ekstrak folder plugin ke dalam *source code* CMS.
    2. Ubah sedikit kode di sistem utama untuk memanggil plugin tersebut (misal: meregistrasi *route* di backend).
    3. **Jalankan perintah Build Ulang** (`go build` untuk backend dan `npm run build` untuk frontend).
    4. *Restart* server.
*   **Kekurangan Utama:** Anda **TIDAK BISA** memasang plugin ini ketika web sudah *live* di production secara langsung (tanpa mematikan server). Setiap penambahan plugin mewajibkan sistem utama di-*build* ulang.

---

## 2. Sistem Plugin Dinamis ala WordPress (Target Ideal)

Ini adalah maksud dari kalimat *"unggah RAR langsung jalan"*. Di sistem seperti WordPress, pengguna tidak perlu tahu soal *coding*, mereka cukup unggah file `.zip`/`.rar` dari halaman admin, dan fitur baru langsung muncul tanpa sistem harus mati atau di-*build* ulang.

**Bagaimana kerjanya?**
Agar CMS bisa "langsung menjalankan" plugin tanpa harus *build* ulang, **pembuat plugin-lah yang harus melakukan proses *build* di komputer mereka sendiri sebelum dikemas menjadi RAR.** 

*   **Analogi:** Memasang radio di mobil dengan cara membeli radio yang sudah jadi (tinggal colok kabel *plug-and-play*). Pabrik mobil sudah menyiapkan colokan (sistem plugin/API), dan radio (plugin) tinggal disambungkan.

**Apa Isi File RAR-nya? (Bukan kode mentah lagi)**
1.  **Untuk Backend (Golang):**
    Karena CMS utama Golang sudah berjalan (sudah jadi file biner/exe), ia tidak bisa tiba-tiba membaca kode `.go` baru. Solusinya, kode Golang di plugin harus di-compile terlebih dahulu menjadi **WASM (WebAssembly)** atau file *Shared Object/Plugin* (`.so`).
    *   *Isi RAR backend bukan `main.go`, melainkan `plugin-berita.wasm`.*
2.  **Untuk Frontend (Svelte):**
    Browser hanya mengerti HTML, CSS, dan Javascript murni (vanilla). Ia tidak mengerti apa itu file `.svelte`. Oleh karena itu, *developer* plugin harus men-compile kode Svelte mereka menjadi file `.js` statis murni.
    *   *Isi RAR frontend bukan komponen Svelte, melainkan file seperti `bundle.js` dan `style.css`.*

**Proses Pemasangan Dinamis:**
1. Admin unggah RAR di *dashboard* CMS.
2. CMS mengekstrak file tersebut.
3. **Backend** langsung memuat file biner/WASM (`.wasm`) ke dalam memori secara dinamis (*Dynamic Loading*) tanpa perlu *restart*.
4. **Frontend** akan disuntikkan tag `<script src="/plugins/berita/bundle.js">` secara otomatis, sehingga UI baru langsung muncul di browser.

---

## Kesimpulan

Pesan yang Anda dapatkan memberitahu bahwa:
*   Kondisi folder `plugin-berita` dan `svelte-plugin-berita` saat ini (yang berisi kode mentah `.go` dan `.svelte`) itu **bagus**, asalkan Anda bersedia me-*restart* dan me-*build* ulang seluruh CMS setiap kali ada penambahan plugin (*Modular Monolith*).
*   Namun, **JIKA** Anda ingin CMS Anda sehebat WordPress (unggah langsung jalan), maka folder tersebut belum siap. Anda harus mengubah cara kerjanya dengan menambahkan proses **Build Plugin (Compile)** agar kode `.go` berubah jadi `.wasm` dan kode `.svelte` berubah jadi `.js` statis, sebelum akhirnya dikemas ke dalam RAR.
