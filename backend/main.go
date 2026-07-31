package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/portal-berita/backend/database"
	"github.com/portal-berita/backend/handlers"
	"github.com/portal-berita/backend/middleware"
)

func main() {
	// Pastikan folder uploads ada
	os.MkdirAll("./uploads", os.ModePerm)

	// Inisialisasi koneksi DB dan Migrasi
	database.Connect()

	app := fiber.New(fiber.Config{
		BodyLimit: 5 * 1024 * 1024, // 5 MB
		ErrorHandler: func(c *fiber.Ctx, err error) error {
			code := fiber.StatusInternalServerError
			if e, ok := err.(*fiber.Error); ok {
				code = e.Code
			}
			if code == fiber.StatusRequestEntityTooLarge {
				return c.Status(code).JSON(fiber.Map{
					"error": "Ukuran file terlalu besar. Maksimal 5 MB.",
				})
			}
			return c.Status(code).JSON(fiber.Map{
				"error": err.Error(),
			})
		},
	})

	app.Use(recover.New())

	// Middleware CORS (Penting untuk frontend beda port)
	app.Use(cors.New(cors.Config{
		AllowOrigins: "*",
		AllowHeaders: "Origin, Content-Type, Accept, Authorization",
		AllowMethods: "GET, POST, PUT, DELETE",
	}))

	// Melayani file statis untuk folder uploads
	app.Static("/uploads", "./uploads")

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Portal Berita Backend API")
	})

	// Rute Autentikasi
	app.Post("/login", handlers.Login)

	// Rute Publik
	app.Get("/berita", handlers.GetAllBerita)
	app.Get("/berita/:id", handlers.GetBeritaByID)
	app.Get("/kategori", handlers.GetAllKategori)

	// Rute Admin (Protected)
	admin := app.Group("/admin", middleware.Protected())

	// Kategori CRUD
	admin.Post("/kategori", handlers.CreateKategori)
	admin.Put("/kategori/:id", handlers.UpdateKategori)
	admin.Delete("/kategori/:id", handlers.DeleteKategori)

	// Berita CRUD
	admin.Post("/berita", handlers.CreateBerita)
	admin.Put("/berita/:id", handlers.UpdateBerita)
	admin.Delete("/berita/:id", handlers.DeleteBerita)
	admin.Post("/upload", handlers.UploadMedia)

	log.Fatal(app.Listen(":3000"))
}
