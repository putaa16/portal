saya ingin membuat sebuah sistem portal berita dengan memiliki dua sisi sistem

# sisi pertama untuk tampilan publik

# sisi kedua untuk admin (perlu login)

    1. Admin dapat melakukan login dan log out
    2. Admin dapat mengelola kategori berita
    3. Admin dapat mengelola berita
        - Admin dapat melihat berita
        - Admin dapat menambahkan berita
            dalam form tambah harus ada inputan untuk
            - judul berita
            - lokasi berita
            - kategori berita dengan mengambil data kategori dari tabel kategori, disajikan dalam bentuk dropdown
            - deskripsi berita
            - upload foto berita
            - tanggal dan jam upload berita otomatis oleh sistem
        - Admin dapat mengupdate berita
        - Admin dapat menghapus berita

Teknologi yang digunakan terdiri dari :

1. Backend menggunakan Go (Fiber)
2. Database menggunakan MySQL dengan menggunakan fitur migration (GORM)
3. Frontend menggunakan Svelte Kit
4. CSS menggunakan Tailwind
5. Login menggunakan PASETO V4
