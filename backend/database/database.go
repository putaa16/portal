package database

import (
	"log"

	"github.com/portal-berita/backend/models"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

var DB *gorm.DB

func Connect() {
	// Koneksi sementara ke server MySQL (tanpa spesifik nama database)
	dsnServer := "root:@tcp(127.0.0.1:3306)/?charset=utf8mb4&parseTime=True&loc=Local"
	dbServer, err := gorm.Open(mysql.Open(dsnServer), &gorm.Config{})
	if err != nil {
		log.Fatal("Gagal terhubung ke server MySQL:", err)
	}

	// Secara otomatis membuat database 'db_portal' jika belum ada
	err = dbServer.Exec("CREATE DATABASE IF NOT EXISTS db_portal").Error
	if err != nil {
		log.Fatal("Gagal membuat database db_portal:", err)
	}

	// Setelah database ada, kita hubungkan langsung ke db_portal
	dsn := "root:@tcp(127.0.0.1:3306)/db_portal?charset=utf8mb4&parseTime=True&loc=Local"
	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal("Gagal terhubung ke database:", err)
	}

	DB = db
	log.Println("Database terkoneksi")

	// Jalankan migrasi tabel
	err = models.Migrate(DB)
	if err != nil {
		log.Fatal("Gagal menjalankan migrasi database:", err)
	}
	log.Println("Migrasi tabel selesai")

	// SEEDER: Buat akun admin default jika belum ada admin sama sekali
	var adminCount int64
	DB.Model(&models.Admin{}).Count(&adminCount)
	if adminCount == 0 {
		defaultAdmin := models.Admin{
			Username: "admin",
			Password: "password123", // Dalam praktik nyata, ini wajib di-hash!
		}
		DB.Create(&defaultAdmin)
		log.Println("Akun admin default berhasil dibuat! (Username: admin | Password: password123)")
	}
}
