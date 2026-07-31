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
	
	newsplugin "github.com/portal-berita/plugin-berita"
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

	// Rute Publik (Plugin Berita)
	// Kita lewatkan app (router utama) sebagai public router
	// Rute Admin (Protected)
	admin := app.Group("/admin", middleware.Protected())
	
	// Register Plugin Berita
	err := newsplugin.RegisterPlugin(newsplugin.Config{
		PublicRouter: app,
		AdminRouter:  admin,
		DB:           database.DB,
	})
	if err != nil {
		log.Fatalf("Gagal register plugin berita: %v", err)
	}

	log.Fatal(app.Listen(":3000"))
}
