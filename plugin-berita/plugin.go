package newsplugin

import (
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

type Config struct {
	PublicRouter fiber.Router
	AdminRouter  fiber.Router
	DB           *gorm.DB
}

func RegisterPlugin(config Config) error {
	// Set package level DB so handlers can use it
	DB = config.DB

	// 1. Auto Migrate Database
	err := DB.AutoMigrate(&Berita{}, &Kategori{})
	if err != nil {
		return err
	}

	// 2. Register Public Routes
	if config.PublicRouter != nil {
		config.PublicRouter.Get("/berita", GetAllBerita)
		config.PublicRouter.Get("/berita/:id", GetBeritaByID)
		config.PublicRouter.Get("/kategori", GetAllKategori)
	}

	// 3. Register Admin Routes
	if config.AdminRouter != nil {
		config.AdminRouter.Post("/kategori", CreateKategori)
		config.AdminRouter.Put("/kategori/:id", UpdateKategori)
		config.AdminRouter.Delete("/kategori/:id", DeleteKategori)

		config.AdminRouter.Post("/berita", CreateBerita)
		config.AdminRouter.Put("/berita/:id", UpdateBerita)
		config.AdminRouter.Delete("/berita/:id", DeleteBerita)
		config.AdminRouter.Post("/upload", UploadMedia)
	}

	return nil
}
