package main

import (
	"time"
)

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
	Deskripsi  string    `gorm:"type:text;not null" json:"deskripsi" form:"deskripsi"`
	Foto       string    `json:"foto"`
	CreatedAt  time.Time `gorm:"autoCreateTime" json:"created_at"`
	UpdatedAt  time.Time `gorm:"autoUpdateTime" json:"updated_at"`
}
