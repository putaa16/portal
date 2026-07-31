package handlers

import (
	"github.com/gofiber/fiber/v2"
	"github.com/portal-berita/backend/auth"
	"github.com/portal-berita/backend/database"
	"github.com/portal-berita/backend/models"
)

type LoginInput struct {
	Username string `json:"username"`
	Password string `json:"password"`
}

func Login(c *fiber.Ctx) error {
	var input LoginInput
	if err := c.BodyParser(&input); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"error": "Input tidak valid",
		})
	}

	var admin models.Admin
	result := database.DB.Where("username = ?", input.Username).First(&admin)
	if result.Error != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Username atau password salah",
		})
	}

	// Dalam produksi, password harus dihash (misalnya dengan bcrypt)
	if input.Password != admin.Password {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"error": "Username atau password salah",
		})
	}

	token, err := auth.GenerateToken(admin.ID, admin.Username)
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"error": "Gagal menghasilkan token",
		})
	}

	return c.JSON(fiber.Map{
		"message": "Login berhasil",
		"token":   token,
	})
}
