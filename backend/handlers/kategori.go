package handlers

import (
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/portal-berita/backend/database"
	"github.com/portal-berita/backend/models"
)

func CreateKategori(c *fiber.Ctx) error {
	var kategori models.Kategori
	if err := c.BodyParser(&kategori); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Input tidak valid"})
	}

	namaTrimmed := strings.TrimSpace(kategori.Nama)
	if namaTrimmed == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Nama kategori tidak boleh kosong"})
	}
	if len([]rune(namaTrimmed)) < 3 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Nama kategori minimal harus terdiri dari 3 karakter"})
	}
	kategori.Nama = namaTrimmed

	// Periksa duplikasi nama kategori
	var count int64
	database.DB.Model(&models.Kategori{}).Where("nama = ?", kategori.Nama).Count(&count)
	if count > 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Kategori dengan nama tersebut sudah ada"})
	}

	if err := database.DB.Create(&kategori).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan kategori"})
	}

	return c.JSON(kategori)
}

func GetAllKategori(c *fiber.Ctx) error {
	var kategoris []models.Kategori
	database.DB.Find(&kategoris)
	return c.JSON(kategoris)
}

func UpdateKategori(c *fiber.Ctx) error {
	id := c.Params("id")
	var kategori models.Kategori

	if err := database.DB.First(&kategori, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Kategori tidak ditemukan"})
	}

	var input struct {
		Nama string `json:"nama"`
	}
	if err := c.BodyParser(&input); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Input tidak valid"})
	}

	namaTrimmed := strings.TrimSpace(input.Nama)
	if namaTrimmed == "" {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Nama kategori tidak boleh kosong"})
	}
	if len([]rune(namaTrimmed)) < 3 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Nama kategori minimal harus terdiri dari 3 karakter"})
	}

	// Periksa duplikasi nama kategori
	var count int64
	database.DB.Model(&models.Kategori{}).Where("nama = ? AND id != ?", namaTrimmed, kategori.ID).Count(&count)
	if count > 0 {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Kategori dengan nama tersebut sudah ada"})
	}

	kategori.Nama = namaTrimmed
	database.DB.Save(&kategori)
	return c.JSON(kategori)
}

func DeleteKategori(c *fiber.Ctx) error {
	id := c.Params("id")
	if err := database.DB.Delete(&models.Kategori{}, id).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menghapus kategori"})
	}
	return c.JSON(fiber.Map{"message": "Kategori berhasil dihapus"})
}
