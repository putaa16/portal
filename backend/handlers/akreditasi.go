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

// CreateAkreditasi handles creating a new accreditation document
func CreateAkreditasi(c *fiber.Ctx) error {
	var akreditasi models.Akreditasi

	judul := strings.TrimSpace(c.FormValue("judul"))
	jenis := strings.TrimSpace(c.FormValue("jenis")) // "foto" atau "dokumen"

	if judul == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Judul dokumen tidak boleh kosong"})
	}
	if len([]rune(judul)) < 3 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Judul dokumen minimal harus terdiri dari 3 karakter"})
	}

	if jenis != "foto" && jenis != "dokumen" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Jenis file tidak valid (harus foto atau dokumen)"})
	}

	// Parsing file upload
	file, err := c.FormFile("file")
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "File dokumen/foto wajib diunggah"})
	}

	ext := strings.ToLower(filepath.Ext(file.Filename))

	if jenis == "foto" {
		// Validasi ukuran logo/foto (maksimal 5MB)
		if file.Size > 5*1024*1024 {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Ukuran foto terlalu besar. Maksimal 5 MB."})
		}
		// Validasi ekstensi foto
		if ext != ".jpg" && ext != ".jpeg" && ext != ".png" && ext != ".webp" && ext != ".gif" {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format file foto tidak didukung. Harap unggah file gambar (jpg, jpeg, png, webp, gif)"})
		}
	} else {
		// Validasi ukuran dokumen (maksimal 10MB)
		if file.Size > 10*1024*1024 {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Ukuran dokumen terlalu besar. Maksimal 10 MB."})
		}
		// Validasi ekstensi dokumen (Hanya PDF sesuai permintaan user)
		if ext != ".pdf" {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format file dokumen tidak didukung. Harap unggah file PDF (.pdf)"})
		}
	}

	// Tentukan folder penyimpanan
	var saveDir string
	var urlPath string
	filename := fmt.Sprintf("%d-%s", time.Now().Unix(), file.Filename)

	if jenis == "foto" {
		saveDir = "./uploads/images/accreditations/"
		urlPath = "/uploads/images/accreditations/" + filename
	} else {
		saveDir = "./uploads/documents/accreditations/"
		urlPath = "/uploads/documents/accreditations/" + filename
	}

	if err := c.SaveFile(file, saveDir+filename); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan berkas ke server"})
	}

	akreditasi.Judul = judul
	akreditasi.Jenis = jenis
	akreditasi.File = urlPath

	if err := database.DB.Create(&akreditasi).Error; err != nil {
		fmt.Printf("GORM Create Akreditasi Error: %v\n", err)
		deleteLocalFile(akreditasi.File)
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": fmt.Sprintf("Gagal menyimpan dokumen akreditasi: %v", err)})
	}

	return c.JSON(akreditasi)
}

// GetAllAkreditasi handles fetching all accreditation documents
func GetAllAkreditasi(c *fiber.Ctx) error {
	var akreditasis []models.Akreditasi
	database.DB.Order("created_at desc").Find(&akreditasis)
	return c.JSON(akreditasis)
}

// GetAkreditasiByID handles fetching a single accreditation document by ID
func GetAkreditasiByID(c *fiber.Ctx) error {
	id := c.Params("id")
	var akreditasi models.Akreditasi
	if err := database.DB.First(&akreditasi, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Dokumen akreditasi tidak ditemukan"})
	}
	return c.JSON(akreditasi)
}

// UpdateAkreditasi handles updating an existing accreditation document
func UpdateAkreditasi(c *fiber.Ctx) error {
	id := c.Params("id")
	var akreditasi models.Akreditasi

	if err := database.DB.First(&akreditasi, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Dokumen akreditasi tidak ditemukan"})
	}

	oldFile := akreditasi.File
	judul := strings.TrimSpace(c.FormValue("judul"))
	jenis := strings.TrimSpace(c.FormValue("jenis")) // "foto" atau "dokumen"

	if judul == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Judul dokumen tidak boleh kosong"})
	}
	if len([]rune(judul)) < 3 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Judul dokumen minimal harus terdiri dari 3 karakter"})
	}

	if jenis != "foto" && jenis != "dokumen" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Jenis file tidak valid (harus foto atau dokumen)"})
	}

	// Parsing file upload (opsional saat update)
	file, err := c.FormFile("file")
	var newFileURL string
	if err == nil {
		ext := strings.ToLower(filepath.Ext(file.Filename))

		if jenis == "foto" {
			// Validasi ukuran logo/foto (maksimal 5MB)
			if file.Size > 5*1024*1024 {
				return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Ukuran foto terlalu besar. Maksimal 5 MB."})
			}
			// Validasi ekstensi foto
			if ext != ".jpg" && ext != ".jpeg" && ext != ".png" && ext != ".webp" && ext != ".gif" {
				return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format file foto tidak didukung. Harap unggah file gambar (jpg, jpeg, png, webp, gif)"})
			}
		} else {
			// Validasi ukuran dokumen (maksimal 10MB)
			if file.Size > 10*1024*1024 {
				return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Ukuran dokumen terlalu besar. Maksimal 10 MB."})
			}
			// Validasi ekstensi dokumen (Hanya PDF sesuai permintaan user)
			if ext != ".pdf" {
				return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Format file dokumen tidak didukung. Harap unggah file PDF (.pdf)"})
			}
		}

		// Tentukan folder penyimpanan
		var saveDir string
		filename := fmt.Sprintf("%d-%s", time.Now().Unix(), file.Filename)

		if jenis == "foto" {
			saveDir = "./uploads/images/accreditations/"
			newFileURL = "/uploads/images/accreditations/" + filename
		} else {
			saveDir = "./uploads/documents/accreditations/"
			newFileURL = "/uploads/documents/accreditations/" + filename
		}

		if err := c.SaveFile(file, saveDir+filename); err != nil {
			return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan berkas baru ke server"})
		}

		// Hapus berkas lama
		if oldFile != "" {
			deleteLocalFile(oldFile)
		}
		akreditasi.File = newFileURL
	} else {
		// Jika jenis berubah tetapi tidak mengunggah file baru, berkas lama tetap tersimpan.
		// Namun idealnya, jika jenis berubah, user harus mengunggah berkas baru yang sesuai.
		// Mari kita cek apakah jenis berubah dari jenis lama. Jika berubah tapi tidak upload berkas baru,
		// kita beri warning atau izinkan saja dengan asumsi user tahu apa yang mereka lakukan.
		// Untuk keamanan, jika jenis berubah (foto <=> dokumen) tetapi tidak upload berkas baru,
		// sebaiknya tolak karena ekstensi file lama tidak akan cocok dengan jenis baru.
		if jenis != akreditasi.Jenis {
			return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Tipe file berubah. Harap unggah file baru yang sesuai dengan jenis yang dipilih!"})
		}
	}

	akreditasi.Judul = judul
	akreditasi.Jenis = jenis

	if err := database.DB.Save(&akreditasi).Error; err != nil {
		fmt.Printf("GORM Update Akreditasi Error: %v\n", err)
		if newFileURL != "" {
			deleteLocalFile(newFileURL)
		}
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": fmt.Sprintf("Gagal memperbarui dokumen akreditasi: %v", err)})
	}

	return c.JSON(akreditasi)
}

// DeleteAkreditasi handles deleting an accreditation document
func DeleteAkreditasi(c *fiber.Ctx) error {
	id := c.Params("id")
	var akreditasi models.Akreditasi

	if err := database.DB.First(&akreditasi, id).Error; err == nil {
		if akreditasi.File != "" {
			deleteLocalFile(akreditasi.File)
		}
	}

	if err := database.DB.Delete(&models.Akreditasi{}, id).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menghapus dokumen akreditasi"})
	}

	return c.JSON(fiber.Map{"message": "Dokumen akreditasi berhasil dihapus"})
}
