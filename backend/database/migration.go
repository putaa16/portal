package database

import (
	"log"
	"os"
	"path/filepath"
	"strings"

	"github.com/portal-berita/backend/models"
	"gorm.io/gorm"
)

// MigrateUploadPaths memindahkan file lama ke struktur folder baru dan memperbarui referensi di database
func MigrateUploadPaths(db *gorm.DB) {
	log.Println("Memulai migrasi struktur folder uploads...")

	// 1. Migrasi Berita (foto berita -> /uploads/images/news/)
	var beritas []models.Berita
	if err := db.Find(&beritas).Error; err == nil {
		for _, berita := range beritas {
			if berita.Foto != "" && strings.HasPrefix(berita.Foto, "/uploads/") && !strings.HasPrefix(berita.Foto, "/uploads/images/") {
				filename := filepath.Base(berita.Foto)
				oldPath := filepath.Join(".", berita.Foto)
				newDir := filepath.Join(".", "uploads", "images", "news")
				newPath := filepath.Join(newDir, filename)
				newURL := "/uploads/images/news/" + filename

				// Pindahkan file jika ada
				if _, err := os.Stat(oldPath); err == nil {
					if err := os.Rename(oldPath, newPath); err == nil {
						log.Printf("[Berita] Berhasil memindahkan berkas: %s -> %s\n", oldPath, newPath)
					} else {
						log.Printf("[Berita] Gagal memindahkan berkas %s ke %s: %v\n", oldPath, newPath, err)
					}
				}

				// Update DB
				db.Model(&berita).Update("foto", newURL)
			}
		}
	}

	// 2. Migrasi Agenda (foto agenda -> /uploads/images/agenda/)
	var agendas []models.Agenda
	if err := db.Find(&agendas).Error; err == nil {
		for _, agenda := range agendas {
			if agenda.Foto != "" && strings.HasPrefix(agenda.Foto, "/uploads/") && !strings.HasPrefix(agenda.Foto, "/uploads/images/") {
				filename := filepath.Base(agenda.Foto)
				oldPath := filepath.Join(".", agenda.Foto)
				newDir := filepath.Join(".", "uploads", "images", "agenda")
				newPath := filepath.Join(newDir, filename)
				newURL := "/uploads/images/agenda/" + filename

				// Pindahkan file jika ada
				if _, err := os.Stat(oldPath); err == nil {
					if err := os.Rename(oldPath, newPath); err == nil {
						log.Printf("[Agenda] Berhasil memindahkan berkas: %s -> %s\n", oldPath, newPath)
					} else {
						log.Printf("[Agenda] Gagal memindahkan berkas %s ke %s: %v\n", oldPath, newPath, err)
					}
				}

				// Update DB
				db.Model(&agenda).Update("foto", newURL)
			}
		}
	}

	// 3. Migrasi Mitra (logo -> /uploads/images/partners/, bukti_dokumen -> /uploads/documents/contracts/)
	var mitras []models.Mitra
	if err := db.Find(&mitras).Error; err == nil {
		for _, mitra := range mitras {
			// Update Logo
			if mitra.Logo != "" && strings.HasPrefix(mitra.Logo, "/uploads/") && !strings.HasPrefix(mitra.Logo, "/uploads/images/") {
				filename := filepath.Base(mitra.Logo)
				oldPath := filepath.Join(".", mitra.Logo)
				newDir := filepath.Join(".", "uploads", "images", "partners")
				newPath := filepath.Join(newDir, filename)
				newURL := "/uploads/images/partners/" + filename

				// Pindahkan file jika ada
				if _, err := os.Stat(oldPath); err == nil {
					if err := os.Rename(oldPath, newPath); err == nil {
						log.Printf("[Mitra Logo] Berhasil memindahkan berkas: %s -> %s\n", oldPath, newPath)
					} else {
						log.Printf("[Mitra Logo] Gagal memindahkan berkas %s ke %s: %v\n", oldPath, newPath, err)
					}
				}

				db.Model(&mitra).Update("logo", newURL)
			}

			// Update Bukti Dokumen
			if mitra.BuktiDokumen != "" && strings.HasPrefix(mitra.BuktiDokumen, "/uploads/") && !strings.HasPrefix(mitra.BuktiDokumen, "/uploads/documents/contracts/") {
				filename := filepath.Base(mitra.BuktiDokumen)
				oldPath := filepath.Join(".", mitra.BuktiDokumen)
				newDir := filepath.Join(".", "uploads", "documents", "contracts")
				newPath := filepath.Join(newDir, filename)
				newURL := "/uploads/documents/contracts/" + filename

				// Pindahkan file jika ada
				if _, err := os.Stat(oldPath); err == nil {
					if err := os.Rename(oldPath, newPath); err == nil {
						log.Printf("[Mitra Dokumen] Berhasil memindahkan berkas: %s -> %s\n", oldPath, newPath)
					} else {
						log.Printf("[Mitra Dokumen] Gagal memindahkan berkas %s ke %s: %v\n", oldPath, newPath, err)
					}
				}

				db.Model(&mitra).Update("bukti_dokumen", newURL)
			}
		}
	}

	log.Println("Migrasi struktur folder uploads selesai.")
}
