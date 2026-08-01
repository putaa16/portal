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

// CreateAgenda handles creating a new agenda
func CreateAgenda(c *fiber.Ctx) error {
	var agenda models.Agenda

	// GORM expects time.Time, so we parse input fields manually to prevent body parser issues with dates
	judul := strings.TrimSpace(c.FormValue("judul"))
	tanggalStr := strings.TrimSpace(c.FormValue("tanggal"))
	deskripsi := strings.TrimSpace(c.FormValue("deskripsi"))

	if judul == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Judul agenda tidak boleh kosong"})
	}
	if len([]rune(judul)) < 5 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Judul agenda minimal harus terdiri dari 5 karakter"})
	}

	if tanggalStr == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Tanggal agenda tidak boleh kosong"})
	}

	// Parsing tanggal
	var tanggal time.Time
	formats := []string{
		"2006-01-02T15:04:05",
		"2006-01-02T15:04",
		"2006-01-02",
		time.RFC3339,
	}
	parsed := false
	for _, f := range formats {
		if t, err := time.ParseInLocation(f, tanggalStr, time.Local); err == nil {
			tanggal = t
			parsed = true
			break
		}
	}
	if !parsed {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format tanggal agenda tidak valid"})
	}

	if isHTMLEmpty(deskripsi) {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Deskripsi/isi agenda tidak boleh kosong"})
	}

	// Parsing file upload (Foto) - Wajib untuk agenda baru
	file, err := c.FormFile("foto")
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Foto agenda wajib diunggah"})
	}

	// Validasi ukuran (maksimal 5MB)
	if file.Size > 5*1024*1024 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Ukuran foto terlalu besar. Maksimal 5 MB."})
	}

	// Validasi ekstensi file
	ext := strings.ToLower(filepath.Ext(file.Filename))
	if ext != ".jpg" && ext != ".jpeg" && ext != ".png" && ext != ".webp" && ext != ".gif" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format file foto tidak didukung. Harap unggah file gambar (jpg, jpeg, png, webp, gif)"})
	}

	filename := fmt.Sprintf("%d-%s", time.Now().Unix(), file.Filename)
	if err := c.SaveFile(file, "./uploads/"+filename); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan berkas foto ke server"})
	}

	agenda.Judul = judul
	agenda.Tanggal = tanggal
	agenda.Deskripsi = deskripsi
	agenda.Foto = "/uploads/" + filename

	if err := database.DB.Create(&agenda).Error; err != nil {
		fmt.Printf("GORM Create Agenda Error: %v\n", err)
		deleteLocalFile(agenda.Foto)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": fmt.Sprintf("Gagal menyimpan agenda: %v", err)})
	}

	return c.JSON(agenda)
}

// GetAllAgenda handles fetching all agendas
func GetAllAgenda(c *fiber.Ctx) error {
	var agendas []models.Agenda
	database.DB.Order("tanggal desc").Find(&agendas)
	return c.JSON(agendas)
}

// GetAgendaByID handles fetching a single agenda by its ID
func GetAgendaByID(c *fiber.Ctx) error {
	id := c.Params("id")
	var agenda models.Agenda
	if err := database.DB.First(&agenda, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Agenda tidak ditemukan"})
	}
	return c.JSON(agenda)
}

// UpdateAgenda handles updating an existing agenda
func UpdateAgenda(c *fiber.Ctx) error {
	id := c.Params("id")
	var agenda models.Agenda

	if err := database.DB.First(&agenda, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Agenda tidak ditemukan"})
	}

	judul := strings.TrimSpace(c.FormValue("judul"))
	tanggalStr := strings.TrimSpace(c.FormValue("tanggal"))
	deskripsi := strings.TrimSpace(c.FormValue("deskripsi"))

	if judul == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Judul agenda tidak boleh kosong"})
	}
	if len([]rune(judul)) < 5 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Judul agenda minimal harus terdiri dari 5 karakter"})
	}

	if tanggalStr == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Tanggal agenda tidak boleh kosong"})
	}

	// Parsing tanggal
	var tanggal time.Time
	formats := []string{
		"2006-01-02T15:04:05",
		"2006-01-02T15:04",
		"2006-01-02",
		time.RFC3339,
	}
	parsed := false
	for _, f := range formats {
		if t, err := time.ParseInLocation(f, tanggalStr, time.Local); err == nil {
			tanggal = t
			parsed = true
			break
		}
	}
	if !parsed {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format tanggal agenda tidak valid"})
	}

	if isHTMLEmpty(deskripsi) {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Deskripsi/isi agenda tidak boleh kosong"})
	}

	// Handle optional photo update
	file, err := c.FormFile("foto")
	if err == nil {
		// Validasi ukuran (maksimal 5MB)
		if file.Size > 5*1024*1024 {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Ukuran foto terlalu besar. Maksimal 5 MB."})
		}

		// Validasi ekstensi file
		ext := strings.ToLower(filepath.Ext(file.Filename))
		if ext != ".jpg" && ext != ".jpeg" && ext != ".png" && ext != ".webp" && ext != ".gif" {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format file foto tidak didukung. Harap unggah file gambar (jpg, jpeg, png, webp, gif)"})
		}

		filename := fmt.Sprintf("%d-%s", time.Now().Unix(), file.Filename)
		if err := c.SaveFile(file, "./uploads/"+filename); err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan berkas foto ke server"})
		}

		// Delete old file
		if agenda.Foto != "" {
			deleteLocalFile(agenda.Foto)
		}
		agenda.Foto = "/uploads/" + filename
	}

	agenda.Judul = judul
	agenda.Tanggal = tanggal
	agenda.Deskripsi = deskripsi

	if err := database.DB.Save(&agenda).Error; err != nil {
		fmt.Printf("GORM Update Agenda Error: %v\n", err)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": fmt.Sprintf("Gagal memperbarui agenda: %v", err)})
	}

	return c.JSON(agenda)
}

// DeleteAgenda handles deleting an agenda
func DeleteAgenda(c *fiber.Ctx) error {
	id := c.Params("id")
	var agenda models.Agenda

	if err := database.DB.First(&agenda, id).Error; err == nil {
		if agenda.Foto != "" {
			deleteLocalFile(agenda.Foto)
		}
	}

	if err := database.DB.Delete(&models.Agenda{}, id).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menghapus agenda"})
	}

	return c.JSON(fiber.Map{"message": "Agenda berhasil dihapus"})
}
