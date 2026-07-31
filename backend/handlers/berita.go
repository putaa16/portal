package handlers

import (
	"fmt"
	"time"

	"github.com/gofiber/fiber/v2"
	"github.com/portal-berita/backend/database"
	"github.com/portal-berita/backend/models"
)

func CreateBerita(c *fiber.Ctx) error {
	var berita models.Berita

	// Parsing file upload (Foto)
	file, err := c.FormFile("foto")
	if err == nil {
		filename := fmt.Sprintf("%d-%s", time.Now().Unix(), file.Filename)
		if err := c.SaveFile(file, "./uploads/"+filename); err == nil {
			berita.Foto = "/uploads/" + filename
		}
	}

	if err := c.BodyParser(&berita); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Input tidak valid"})
	}

	if err := database.DB.Create(&berita).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan berita"})
	}

	return c.JSON(berita)
}

func GetAllBerita(c *fiber.Ctx) error {
	var beritas []models.Berita
	database.DB.Preload("Kategori").Order("created_at desc").Find(&beritas)
	return c.JSON(beritas)
}

func GetBeritaByID(c *fiber.Ctx) error {
	id := c.Params("id")
	var berita models.Berita
	if err := database.DB.Preload("Kategori").First(&berita, id).Error; err != nil {
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

	// Parsing file upload (Foto) jika ada update foto
	file, err := c.FormFile("foto")
	if err == nil {
		filename := fmt.Sprintf("%d-%s", time.Now().Unix(), file.Filename)
		if err := c.SaveFile(file, "./uploads/"+filename); err == nil {
			berita.Foto = "/uploads/" + filename
		}
	}

	if err := c.BodyParser(&berita); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Input tidak valid"})
	}

	database.DB.Save(&berita)
	return c.JSON(berita)
}

func DeleteBerita(c *fiber.Ctx) error {
	id := c.Params("id")
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
	if err := c.SaveFile(file, "./uploads/"+filename); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan file"})
	}

	return c.JSON(fiber.Map{
		"url": "/uploads/" + filename,
	})
}



