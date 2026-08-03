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

	jpgFilename := GetJPGFilename(fmt.Sprintf("%d-%s", time.Now().Unix(), file.Filename))
	destPath := "./uploads/images/agenda/" + jpgFilename
	if err := CompressAndSaveMultipartImage(file, destPath); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan dan mengompresi foto"})
	}

	agenda.Judul = judul
	agenda.Tanggal = tanggal
	agenda.Deskripsi = deskripsi
	agenda.Foto = "/uploads/images/agenda/" + jpgFilename

	if err := database.DB.Create(&agenda).Error; err != nil {
		fmt.Printf("GORM Create Agenda Error: %v\n", err)
		deleteLocalFile(agenda.Foto)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": fmt.Sprintf("Gagal menyimpan agenda: %v", err)})
	}

	return c.JSON(agenda)
}

// GetAllAgenda handles fetching all agendas
func GetAllAgenda(c *fiber.Ctx) error {
	query := database.DB.Order("tanggal desc")

	// 1. Pencarian Kata Kunci (search)
	search := strings.TrimSpace(c.Query("search"))
	if search != "" {
		query = query.Where("judul LIKE ? OR deskripsi LIKE ?", "%"+search+"%", "%"+search+"%")
	}

	// 2. Pagination (Hanya jika query param 'page' dikirim dan > 0)
	page := c.QueryInt("page")
	if page > 0 {
		limit := c.QueryInt("limit")
		if limit <= 0 {
			limit = 10 // default limit
		}
		offset := (page - 1) * limit

		var total int64
		var countQuery = database.DB.Model(&models.Agenda{})
		if search != "" {
			countQuery = countQuery.Where("judul LIKE ? OR deskripsi LIKE ?", "%"+search+"%", "%"+search+"%")
		}
		countQuery.Count(&total)

		var agendas []models.Agenda
		if err := query.Limit(limit).Offset(offset).Find(&agendas).Error; err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal mengambil data agenda"})
		}

		totalPages := int(total) / limit
		if int(total)%limit != 0 {
			totalPages++
		}

		return c.JSON(fiber.Map{
			"data":        agendas,
			"total":       total,
			"page":        page,
			"limit":       limit,
			"total_pages": totalPages,
		})
	}

	// Jika tidak meminta pagination, kembalikan list array langsung untuk backward compatibility
	var agendas []models.Agenda
	if err := query.Find(&agendas).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal mengambil data agenda"})
	}
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

	oldFoto := agenda.Foto

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

		jpgFilename := GetJPGFilename(fmt.Sprintf("%d-%s", time.Now().Unix(), file.Filename))
		destPath := "./uploads/images/agenda/" + jpgFilename
		if err := CompressAndSaveMultipartImage(file, destPath); err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan dan mengompresi foto"})
		}

		// Delete old file
		if oldFoto != "" {
			deleteLocalFile(oldFoto)
		}
		agenda.Foto = "/uploads/images/agenda/" + jpgFilename
	} else {
		// Pastikan foto lama dipertahankan jika tidak ada update foto
		agenda.Foto = oldFoto
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
