package handlers

import (
	"fmt"
	"os"
	"path/filepath"
	"regexp"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/portal-berita/backend/database"
	"github.com/portal-berita/backend/models"
)

var htmlTagRegex = regexp.MustCompile(`<[^>]*>`)
var htmlSpaceRegex = regexp.MustCompile(`&nbsp;`)

func isHTMLEmpty(html string) bool {
	if strings.Contains(html, "<img") || strings.Contains(html, "<iframe") || strings.Contains(html, "<video") {
		return false
	}
	txt := htmlTagRegex.ReplaceAllString(html, "")
	txt = htmlSpaceRegex.ReplaceAllString(txt, " ")
	txt = strings.TrimSpace(txt)
	return len(txt) == 0
}

// deleteLocalFile menghapus berkas fisik di server berdasarkan URL database
func deleteLocalFile(fileURL string) {
	if fileURL == "" {
		return
	}
	// Mengubah "/uploads/nama-file.png" menjadi "./uploads/nama-file.png"
	filePath := filepath.Join(".", fileURL)

	// Cek apakah file ada, lalu hapus
	if _, err := os.Stat(filePath); err == nil {
		if err := os.Remove(filePath); err != nil {
			fmt.Printf("Gagal menghapus berkas lama %s: %v\n", filePath, err)
		} else {
			fmt.Printf("Berkas lama berhasil dihapus: %s\n", filePath)
		}
	}
}

func CreateBerita(c *fiber.Ctx) error {
	var berita models.Berita

	if err := c.BodyParser(&berita); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Input tidak valid"})
	}

	berita.Status = strings.TrimSpace(berita.Status)
	if berita.Status == "" {
		berita.Status = "published"
	}
	if berita.Status != "draft" && berita.Status != "published" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Status berita tidak valid"})
	}

	// Validasi input wajib
	judul := strings.TrimSpace(berita.Judul)
	if judul == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Judul berita tidak boleh kosong"})
	}
	if len([]rune(judul)) < 5 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Judul berita minimal harus terdiri dari 5 karakter"})
	}

	lokasi := strings.TrimSpace(berita.Lokasi)
	if lokasi == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Lokasi berita tidak boleh kosong"})
	}

	if isHTMLEmpty(berita.Deskripsi) {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Deskripsi/isi berita tidak boleh kosong"})
	}

	if berita.KategoriID == 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Kategori berita harus dipilih"})
	}

	// Periksa apakah kategori_id valid di database
	var kat models.Kategori
	if err := database.DB.First(&kat, berita.KategoriID).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Kategori yang dipilih tidak valid atau tidak ditemukan"})
	}

	// Parsing file upload (Foto) - Wajib untuk berita baru
	file, err := c.FormFile("foto")
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Foto berita wajib diunggah"})
	}

	// Validasi ukuran (maksimal 5MB)
	if file.Size > 5*1024 * 1024 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Ukuran foto terlalu besar. Maksimal 5 MB."})
	}

	// Validasi ekstensi file
	ext := strings.ToLower(filepath.Ext(file.Filename))
	if ext != ".jpg" && ext != ".jpeg" && ext != ".png" && ext != ".webp" && ext != ".gif" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format file foto tidak didukung. Harap unggah file gambar (jpg, jpeg, png, webp, gif)"})
	}

	jpgFilename := GetJPGFilename(fmt.Sprintf("%d-%s", time.Now().Unix(), file.Filename))
	destPath := "./uploads/images/news/" + jpgFilename
	if err := CompressAndSaveMultipartImage(file, destPath); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan dan mengompresi foto"})
	}
	berita.Foto = "/uploads/images/news/" + jpgFilename

	if err := database.DB.Create(&berita).Error; err != nil {
		fmt.Printf("GORM Create Error: %v\n", err)
		// Hapus file jika DB gagal
		deleteLocalFile(berita.Foto)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": fmt.Sprintf("Gagal menyimpan berita: %v", err)})
	}

	return c.JSON(berita)
}

func GetAllBerita(c *fiber.Ctx) error {
	isAdmin := strings.HasPrefix(c.Path(), "/admin")

	query := database.DB.Preload("Kategori")
	if !isAdmin {
		query = query.Where("status = ?", "published")
	}

	// 1. Filter Kategori
	kategoriID := c.QueryInt("kategori_id")
	if kategoriID > 0 {
		query = query.Where("kategori_id = ?", kategoriID)
	}

	// 2. Filter Status (Hanya berlaku untuk admin)
	if isAdmin {
		status := strings.TrimSpace(c.Query("status"))
		if status != "" {
			query = query.Where("status = ?", status)
		}
	}

	// 3. Pencarian Kata Kunci (search)
	search := strings.TrimSpace(c.Query("search"))
	if search != "" {
		// Cari di judul, deskripsi, atau lokasi
		query = query.Where("judul LIKE ? OR deskripsi LIKE ? OR lokasi LIKE ?", "%"+search+"%", "%"+search+"%", "%"+search+"%")
	}

	// Order by default
	query = query.Order("created_at desc")

	// 4. Pagination (Hanya jika query param 'page' dikirim dan > 0)
	page := c.QueryInt("page")
	if page > 0 {
		limit := c.QueryInt("limit")
		if limit <= 0 {
			limit = 10 // default limit
		}
		offset := (page - 1) * limit

		var total int64
		// Hitung total data yang cocok dengan filter
		var countQuery = database.DB.Model(&models.Berita{})
		if !isAdmin {
			countQuery = countQuery.Where("status = ?", "published")
		}
		if kategoriID > 0 {
			countQuery = countQuery.Where("kategori_id = ?", kategoriID)
		}
		if isAdmin {
			status := strings.TrimSpace(c.Query("status"))
			if status != "" {
				countQuery = countQuery.Where("status = ?", status)
			}
		}
		if search != "" {
			countQuery = countQuery.Where("judul LIKE ? OR deskripsi LIKE ? OR lokasi LIKE ?", "%"+search+"%", "%"+search+"%", "%"+search+"%")
		}
		countQuery.Count(&total)

		var beritas []models.Berita
		if err := query.Limit(limit).Offset(offset).Find(&beritas).Error; err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal mengambil data berita"})
		}

		totalPages := int(total) / limit
		if int(total)%limit != 0 {
			totalPages++
		}

		return c.JSON(fiber.Map{
			"data":        beritas,
			"total":       total,
			"page":        page,
			"limit":       limit,
			"total_pages": totalPages,
		})
	}

	// Jika tidak meminta pagination, kembalikan list array langsung untuk backward compatibility
	var beritas []models.Berita
	if err := query.Find(&beritas).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal mengambil data berita"})
	}
	return c.JSON(beritas)
}

func GetBeritaByID(c *fiber.Ctx) error {
	id := c.Params("id")
	var berita models.Berita
	if err := database.DB.Preload("Kategori").First(&berita, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Berita tidak ditemukan"})
	}

	isAdmin := strings.HasPrefix(c.Path(), "/admin")
	if !isAdmin && berita.Status != "published" {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Berita tidak ditemukan"})
	}

	return c.JSON(berita)
}

func UpdateBerita(c *fiber.Ctx) error {
	id := c.Params("id")
	var berita models.Berita

	if err := database.DB.First(&berita, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Berita tidak ditemukan"})
	}

	oldFoto := berita.Foto

	if err := c.BodyParser(&berita); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Input tidak valid"})
	}

	berita.Status = strings.TrimSpace(berita.Status)
	if berita.Status == "" {
		berita.Status = "published"
	}
	if berita.Status != "draft" && berita.Status != "published" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Status berita tidak valid"})
	}

	// Validasi input wajib
	judul := strings.TrimSpace(berita.Judul)
	if judul == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Judul berita tidak boleh kosong"})
	}
	if len([]rune(judul)) < 5 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Judul berita minimal harus terdiri dari 5 karakter"})
	}

	lokasi := strings.TrimSpace(berita.Lokasi)
	if lokasi == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Lokasi berita tidak boleh kosong"})
	}

	if isHTMLEmpty(berita.Deskripsi) {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Deskripsi/isi berita tidak boleh kosong"})
	}

	if berita.KategoriID == 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Kategori berita harus dipilih"})
	}

	// Periksa apakah kategori_id valid di database
	var kat models.Kategori
	if err := database.DB.First(&kat, berita.KategoriID).Error; err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Kategori yang dipilih tidak valid atau tidak ditemukan"})
	}

	// Parsing file upload (Foto) jika ada update foto (Opsional saat update)
	file, err := c.FormFile("foto")
	if err == nil {
		// Validasi ukuran (maksimal 5MB)
		if file.Size > 5*1024 * 1024 {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Ukuran foto terlalu besar. Maksimal 5 MB."})
		}

		// Validasi ekstensi file
		ext := strings.ToLower(filepath.Ext(file.Filename))
		if ext != ".jpg" && ext != ".jpeg" && ext != ".png" && ext != ".webp" && ext != ".gif" {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format file foto tidak didukung. Harap unggah file gambar (jpg, jpeg, png, webp, gif)"})
		}

		jpgFilename := GetJPGFilename(fmt.Sprintf("%d-%s", time.Now().Unix(), file.Filename))
		destPath := "./uploads/images/news/" + jpgFilename
		if err := CompressAndSaveMultipartImage(file, destPath); err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan dan mengompresi foto"})
		}

		// Hapus foto lama jika ada sebelum memperbarui dengan foto baru
		if oldFoto != "" {
			deleteLocalFile(oldFoto)
		}
		berita.Foto = "/uploads/images/news/" + jpgFilename
	} else {
		// Jika tidak ada foto baru, pastikan foto lama tetap dipertahankan
		berita.Foto = oldFoto
	}

	if err := database.DB.Save(&berita).Error; err != nil {
		fmt.Printf("GORM Save Error: %v\n", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": fmt.Sprintf("Gagal memperbarui berita: %v", err)})
	}
	return c.JSON(berita)
}

func DeleteBerita(c *fiber.Ctx) error {
	id := c.Params("id")
	var berita models.Berita

	// Temukan data berita terlebih dahulu untuk mendapatkan URL foto yang akan dihapus
	if err := database.DB.First(&berita, id).Error; err == nil {
		if berita.Foto != "" {
			deleteLocalFile(berita.Foto)
		}
	}

	if err := database.DB.Delete(&models.Berita{}, id).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menghapus berita"})
	}
	return c.JSON(fiber.Map{"message": "Berita berhasil dihapus"})
}

func UploadMedia(c *fiber.Ctx) error {
	file, err := c.FormFile("file")
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "File tidak ditemukan"})
	}

	filename := fmt.Sprintf("%d-%s", time.Now().Unix(), file.Filename)
	if err := c.SaveFile(file, "./uploads/images/news/"+filename); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan file"})
	}

	return c.JSON(fiber.Map{
		"url": "/uploads/images/news/" + filename,
	})
}



