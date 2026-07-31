package middleware

import (
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/portal-berita/backend/auth"
)

func Protected() fiber.Handler {
	return func(c *fiber.Ctx) error {
		authHeader := c.Get("Authorization")
		if authHeader == "" {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Akses ditolak, token tidak ditemukan",
			})
		}

		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || parts[0] != "Bearer" {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Format token tidak valid",
			})
		}

		tokenString := parts[1]
		token, err := auth.ParseToken(tokenString)
		if err != nil {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Token tidak valid atau sudah kedaluwarsa",
			})
		}

		var userID uint
		err = token.Get("user_id", &userID)
		if err != nil {
			return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Data user di token tidak valid",
			})
		}

		// Simpan user_id ke konteks fiber agar bisa diakses di handler selanjutnya
		c.Locals("user_id", userID)

		return c.Next()
	}
}
