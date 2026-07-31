package models

import (
	"gorm.io/gorm"
)

type Admin struct {
	ID       uint   `gorm:"primaryKey" json:"id"`
	Username string `gorm:"unique;not null" json:"username"`
	Password string `gorm:"not null" json:"-"`
}

func Migrate(db *gorm.DB) error {
	return db.AutoMigrate(&Admin{})
}
