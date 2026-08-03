package main

import (
	"fmt"
	"time"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

var DB *gorm.DB

// --- Berita Handlers ---

func CreateBerita(c *fiber.Ctx) error {
	var berita Berita

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

	if err := DB.Create(&berita).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan berita"})
	}

	return c.JSON(berita)
}

func GetAllBerita(c *fiber.Ctx) error {
	var beritas []Berita
	DB.Preload("Kategori").Order("created_at desc").Find(&beritas)
	return c.JSON(beritas)
}

func GetBeritaByID(c *fiber.Ctx) error {
	id := c.Params("id")
	var berita Berita
	if err := DB.Preload("Kategori").First(&berita, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Berita tidak ditemukan"})
	}
	return c.JSON(berita)
}

func UpdateBerita(c *fiber.Ctx) error {
	id := c.Params("id")
	var berita Berita

	if err := DB.First(&berita, id).Error; err != nil {
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

	DB.Save(&berita)
	return c.JSON(berita)
}

func DeleteBerita(c *fiber.Ctx) error {
	id := c.Params("id")
	if err := DB.Delete(&Berita{}, id).Error; err != nil {
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

// --- Kategori Handlers ---

func CreateKategori(c *fiber.Ctx) error {
	var kategori Kategori
	if err := c.BodyParser(&kategori); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Input tidak valid"})
	}

	if err := DB.Create(&kategori).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menyimpan kategori"})
	}

	return c.JSON(kategori)
}

func GetAllKategori(c *fiber.Ctx) error {
	var kategoris []Kategori
	DB.Find(&kategoris)
	return c.JSON(kategoris)
}

func UpdateKategori(c *fiber.Ctx) error {
	id := c.Params("id")
	var kategori Kategori

	if err := DB.First(&kategori, id).Error; err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{"error": "Kategori tidak ditemukan"})
	}

	if err := c.BodyParser(&kategori); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{"error": "Input tidak valid"})
	}

	DB.Save(&kategori)
	return c.JSON(kategori)
}

func DeleteKategori(c *fiber.Ctx) error {
	id := c.Params("id")
	if err := DB.Delete(&Kategori{}, id).Error; err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{"error": "Gagal menghapus kategori"})
	}
	return c.JSON(fiber.Map{"message": "Kategori berhasil dihapus"})
}
