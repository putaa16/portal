package models

import (
	"time"

	"gorm.io/gorm"
)

type Admin struct {
	ID       uint   `gorm:"primaryKey" json:"id"`
	Username string `gorm:"unique;not null" json:"username"`
	Password string `gorm:"not null" json:"-"`
}

type Kategori struct {
	ID   uint   `gorm:"primaryKey" json:"id"`
	Nama string `gorm:"unique;not null" json:"nama"`
}

type Berita struct {
	ID         uint      `gorm:"primaryKey" json:"id" form:"id"`
	Judul      string    `gorm:"not null" json:"judul" form:"judul"`
	Lokasi     string    `gorm:"not null" json:"lokasi" form:"lokasi"`
	KategoriID uint      `json:"kategori_id" form:"kategori_id"`
	Kategori   Kategori  `gorm:"foreignKey:KategoriID" json:"kategori"`
	Deskripsi  string    `gorm:"type:longtext;not null" json:"deskripsi" form:"deskripsi"`
	Foto       string    `json:"foto"`
	CreatedAt  time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt  time.Time `gorm:"autoUpdateTime" json:"updated_at"`
}

type Agenda struct {
	ID        uint      `gorm:"primaryKey" json:"id" form:"id"`
	Judul     string    `gorm:"not null" json:"judul" form:"judul"`
	Tanggal   time.Time `gorm:"not null" json:"tanggal" form:"tanggal"`
	Deskripsi string    `gorm:"type:longtext;not null" json:"deskripsi" form:"deskripsi"`
	Foto      string    `json:"foto"`
	CreatedAt time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt time.Time `gorm:"autoUpdateTime" json:"updated_at"`
}

func Migrate(db *gorm.DB) error {
	return db.AutoMigrate(&Admin{}, &Kategori{}, &Berita{}, &Agenda{})
}

