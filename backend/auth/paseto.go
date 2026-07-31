package auth

import (
	"time"

	"aidanwoods.dev/go-paseto"
)

var secretKey paseto.V4SymmetricKey

func init() {
	// Untuk keamanan, simpan di env variables. Ini hanya untuk keperluan awal.
	secretKey = paseto.NewV4SymmetricKey()
}

func GenerateToken(userID uint, username string) (string, error) {
	token := paseto.NewToken()

	token.SetIssuedAt(time.Now())
	token.SetNotBefore(time.Now())
	token.SetExpiration(time.Now().Add(24 * time.Hour))
	token.Set("user_id", userID)
	token.Set("username", username)

	return token.V4Encrypt(secretKey, nil), nil
}

func ParseToken(encryptedToken string) (*paseto.Token, error) {
	parser := paseto.NewParser()
	return parser.ParseV4Local(secretKey, encryptedToken, nil)
}
