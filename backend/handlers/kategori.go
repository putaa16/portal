package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/portal-berita/backend/database"
	"github.com/portal-berita/backend/models"
)

func CreateKategori(c *fiber.Ctx) error {
	var kategori models.Kategori
	if err := c.BodyParser(&kategori); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Input tidak valid"})
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

	if err := c.BodyParser(&kategori); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Input tidak valid"})
	}

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
