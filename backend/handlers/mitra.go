package handlers

import (
	"fmt"
	"path/filepath"
	"strings"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/portal-berita/backend/database"
	"github.com/portal-berita/backend/models"
)

// CreateMitra handles creating a new partner (mitra)
func CreateMitra(c *fiber.Ctx) error {
	var mitra models.Mitra

	nama := strings.TrimSpace(c.FormValue("nama"))
	masaAktifStr := strings.TrimSpace(c.FormValue("masa_aktif"))
	status := strings.TrimSpace(c.FormValue("status"))

	if nama == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Nama mitra tidak boleh kosong"})
	}
	if len([]rune(nama)) < 3 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Nama mitra minimal harus terdiri dari 3 karakter"})
	}

	if masaAktifStr == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Masa aktif kerja sama tidak boleh kosong"})
	}

	if status != "draft" && status != "published" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Status kerja sama tidak valid (harus draft atau published)"})
	}

	// Parsing tanggal masa aktif
	var masaAktif time.Time
	formats := []string{
		"2006-01-02T15:04:05",
		"2006-01-02T15:04",
		"2006-01-02",
		time.RFC3339,
	}
	parsed := false
	for _, f := range formats {
		if t, err := time.ParseInLocation(f, masaAktifStr, time.Local); err == nil {
			masaAktif = t
			parsed = true
			break
		}
	}
	if !parsed {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format tanggal masa aktif tidak valid"})
	}

	// 1. Parsing file upload (Logo) - Wajib untuk mitra baru
	logoFile, err := c.FormFile("logo")
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Logo mitra wajib diunggah"})
	}

	// Validasi ukuran logo (maksimal 5MB)
	if logoFile.Size > 5*1024*1024 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Ukuran logo terlalu besar. Maksimal 5 MB."})
	}

	// Validasi ekstensi logo
	logoExt := strings.ToLower(filepath.Ext(logoFile.Filename))
	if logoExt != ".jpg" && logoExt != ".jpeg" && logoExt != ".png" && logoExt != ".webp" && logoExt != ".gif" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format file logo tidak didukung. Harap unggah file gambar (jpg, jpeg, png, webp, gif)"})
	}

	// 2. Parsing file upload (Bukti Dokumen) - Wajib untuk mitra baru
	dokumenFile, err := c.FormFile("bukti_dokumen")
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Bukti dokumen kerja sama wajib diunggah"})
	}

	// Validasi ukuran dokumen (maksimal 10MB)
	if dokumenFile.Size > 10*1024*1024 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Ukuran dokumen terlalu besar. Maksimal 10 MB."})
	}

	// Validasi ekstensi dokumen (PDF)
	dokumenExt := strings.ToLower(filepath.Ext(dokumenFile.Filename))
	if dokumenExt != ".pdf" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format bukti dokumen tidak didukung. Harap unggah berkas (pdf)"})
	}

	// Simpan Logo
	logoFilename := fmt.Sprintf("%d-logo-%s", time.Now().Unix(), logoFile.Filename)
	if err := c.SaveFile(logoFile, "./uploads/"+logoFilename); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan berkas logo ke server"})
	}

	// Simpan Bukti Dokumen
	dokumenFilename := fmt.Sprintf("%d-dok-%s", time.Now().Unix(), dokumenFile.Filename)
	if err := c.SaveFile(dokumenFile, "./uploads/documents/"+dokumenFilename); err != nil {
		// Hapus logo yang terlanjur terunggah
		deleteLocalFile("/uploads/" + logoFilename)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan berkas dokumen ke server"})
	}

	mitra.Nama = nama
	mitra.MasaAktif = masaAktif
	mitra.Status = status
	mitra.Logo = "/uploads/" + logoFilename
	mitra.BuktiDokumen = "/uploads/documents/" + dokumenFilename

	if err := database.DB.Create(&mitra).Error; err != nil {
		fmt.Printf("GORM Create Mitra Error: %v\n", err)
		deleteLocalFile(mitra.Logo)
		deleteLocalFile(mitra.BuktiDokumen)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": fmt.Sprintf("Gagal menyimpan mitra: %v", err)})
	}

	return c.JSON(mitra)
}

// GetAllMitra handles fetching all partners
func GetAllMitra(c *fiber.Ctx) error {
	var mitras []models.Mitra
	// Cek jika request datang dari publik atau admin
	// Jika publik, kita filter yang status = "published"
	isAdmin := strings.HasPrefix(c.Path(), "/admin")

	query := database.DB
	if !isAdmin {
		query = query.Where("status = ?", "published")
	}

	query.Order("created_at desc").Find(&mitras)
	return c.JSON(mitras)
}

// GetMitraByID handles fetching a single partner by ID
func GetMitraByID(c *fiber.Ctx) error {
	id := c.Params("id")
	var mitra models.Mitra
	if err := database.DB.First(&mitra, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Mitra tidak ditemukan"})
	}

	// Jika non-admin mencoba mengakses draf
	isAdmin := strings.HasPrefix(c.Path(), "/admin")
	if !isAdmin && mitra.Status != "published" {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Mitra tidak ditemukan"})
	}

	return c.JSON(mitra)
}

// UpdateMitra handles updating an existing partner
func UpdateMitra(c *fiber.Ctx) error {
	id := c.Params("id")
	var mitra models.Mitra

	if err := database.DB.First(&mitra, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Mitra tidak ditemukan"})
	}

	oldLogo := mitra.Logo
	oldDokumen := mitra.BuktiDokumen

	nama := strings.TrimSpace(c.FormValue("nama"))
	masaAktifStr := strings.TrimSpace(c.FormValue("masa_aktif"))
	status := strings.TrimSpace(c.FormValue("status"))

	if nama == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Nama mitra tidak boleh kosong"})
	}
	if len([]rune(nama)) < 3 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Nama mitra minimal harus terdiri dari 3 karakter"})
	}

	if masaAktifStr == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Masa aktif kerja sama tidak boleh kosong"})
	}

	if status != "draft" && status != "published" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Status kerja sama tidak valid (harus draft atau published)"})
	}

	// Parsing tanggal
	var masaAktif time.Time
	formats := []string{
		"2006-01-02T15:04:05",
		"2006-01-02T15:04",
		"2006-01-02",
		time.RFC3339,
	}
	parsed := false
	for _, f := range formats {
		if t, err := time.ParseInLocation(f, masaAktifStr, time.Local); err == nil {
			masaAktif = t
			parsed = true
			break
		}
	}
	if !parsed {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format tanggal masa aktif tidak valid"})
	}

	// Handle optional logo update
	logoFile, err := c.FormFile("logo")
	var newLogo string
	if err == nil {
		if logoFile.Size > 5*1024*1024 {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Ukuran logo terlalu besar. Maksimal 5 MB."})
		}
		logoExt := strings.ToLower(filepath.Ext(logoFile.Filename))
		if logoExt != ".jpg" && logoExt != ".jpeg" && logoExt != ".png" && logoExt != ".webp" && logoExt != ".gif" {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format file logo tidak didukung. Harap unggah file gambar (jpg, jpeg, png, webp, gif)"})
		}
		logoFilename := fmt.Sprintf("%d-logo-%s", time.Now().Unix(), logoFile.Filename)
		if err := c.SaveFile(logoFile, "./uploads/"+logoFilename); err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan berkas logo baru ke server"})
		}
		newLogo = "/uploads/" + logoFilename
	}

	// Handle optional document update
	dokumenFile, err := c.FormFile("bukti_dokumen")
	var newDokumen string
	if err == nil {
		if dokumenFile.Size > 10*1024*1024 {
			if newLogo != "" {
				deleteLocalFile(newLogo)
			}
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Ukuran dokumen terlalu besar. Maksimal 10 MB."})
		}
		dokumenExt := strings.ToLower(filepath.Ext(dokumenFile.Filename))
		if dokumenExt != ".pdf" {
			if newLogo != "" {
				deleteLocalFile(newLogo)
			}
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format bukti dokumen tidak didukung. Harap unggah berkas (pdf)"})
		}
		dokumenFilename := fmt.Sprintf("%d-dok-%s", time.Now().Unix(), dokumenFile.Filename)
		if err := c.SaveFile(dokumenFile, "./uploads/documents/"+dokumenFilename); err != nil {
			if newLogo != "" {
				deleteLocalFile(newLogo)
			}
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan berkas dokumen baru ke server"})
		}
		newDokumen = "/uploads/documents/" + dokumenFilename
	}

	// Assign values
	mitra.Nama = nama
	mitra.MasaAktif = masaAktif
	mitra.Status = status

	if newLogo != "" {
		if oldLogo != "" {
			deleteLocalFile(oldLogo)
		}
		mitra.Logo = newLogo
	}
	if newDokumen != "" {
		if oldDokumen != "" {
			deleteLocalFile(oldDokumen)
		}
		mitra.BuktiDokumen = newDokumen
	}

	if err := database.DB.Save(&mitra).Error; err != nil {
		fmt.Printf("GORM Update Mitra Error: %v\n", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": fmt.Sprintf("Gagal memperbarui mitra: %v", err)})
	}

	return c.JSON(mitra)
}

// DeleteMitra handles deleting a partner
func DeleteMitra(c *fiber.Ctx) error {
	id := c.Params("id")
	var mitra models.Mitra

	if err := database.DB.First(&mitra, id).Error; err == nil {
		if mitra.Logo != "" {
			deleteLocalFile(mitra.Logo)
		}
		if mitra.BuktiDokumen != "" {
			deleteLocalFile(mitra.BuktiDokumen)
		}
	}

	if err := database.DB.Delete(&models.Mitra{}, id).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menghapus mitra"})
	}

	return c.JSON(fiber.Map{"message": "Mitra berhasil dihapus"})
}
