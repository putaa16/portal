package handlers

import (
	"fmt"
	"image"
	_ "image/gif"
	"image/jpeg"
	_ "image/png"
	"io"
	"mime/multipart"
	"os"
	"path/filepath"
	"strings"
)

// resizeImage meresize gambar secara proporsional jika melebihi maxDim
func resizeImage(img image.Image, maxDim int) image.Image {
	bounds := img.Bounds()
	w, h := bounds.Dx(), bounds.Dy()
	if w <= maxDim && h <= maxDim {
		return img
	}

	var newW, newH int
	if w > h {
		newW = maxDim
		newH = h * maxDim / w
	} else {
		newH = maxDim
		newW = w * maxDim / h
	}

	newImg := image.NewRGBA(image.Rect(0, 0, newW, newH))
	for y := 0; y < newH; y++ {
		for x := 0; x < newW; x++ {
			srcX := x * w / newW
			srcY := y * h / newH
			newImg.Set(x, y, img.At(bounds.Min.X+srcX, bounds.Min.Y+srcY))
		}
	}
	return newImg
}

// CompressAndSaveMultipartImage mengompresi dan menyimpan file dari multipart.FileHeader sebagai JPEG terkompresi
func CompressAndSaveMultipartImage(file *multipart.FileHeader, destPath string) error {
	// Pastikan direktori tujuan ada
	dir := filepath.Dir(destPath)
	if err := os.MkdirAll(dir, os.ModePerm); err != nil {
		return fmt.Errorf("gagal membuat direktori: %v", err)
	}

	src, err := file.Open()
	if err != nil {
		return fmt.Errorf("gagal membuka file multipart: %v", err)
	}
	defer src.Close()

	// Coba decode gambar
	img, _, err := image.Decode(src)
	if err != nil {
		// Jika gagal decode (misal format tidak didukung), simpan file asli sebagai fallback
		out, err := os.Create(destPath)
		if err != nil {
			return fmt.Errorf("gagal membuat file fallback: %v", err)
		}
		defer out.Close()

		// Reset pointer file ke awal jika bisa
		if seeker, ok := src.(io.ReadSeeker); ok {
			_, _ = seeker.Seek(0, io.SeekStart)
		}

		if _, err := io.Copy(out, src); err != nil {
			return fmt.Errorf("gagal menyalin file asli: %v", err)
		}
		return nil
	}

	// Resize gambar jika lebar/tinggi > 1200px
	resizedImg := resizeImage(img, 1200)

	// Buat file tujuan
	out, err := os.Create(destPath)
	if err != nil {
		return fmt.Errorf("gagal membuat file output: %v", err)
	}
	defer out.Close()

	// Kompresi ke JPEG dengan kualitas 80%
	options := jpeg.Options{Quality: 80}
	if err := jpeg.Encode(out, resizedImg, &options); err != nil {
		return fmt.Errorf("gagal mengodekan jpeg: %v", err)
	}

	return nil
}

// GetJPGFilename mengubah ekstensi file menjadi .jpg
func GetJPGFilename(filename string) string {
	ext := filepath.Ext(filename)
	if ext == "" {
		return filename + ".jpg"
	}
	return strings.TrimSuffix(filename, ext) + ".jpg"
}
