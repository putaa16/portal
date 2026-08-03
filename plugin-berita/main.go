package main

import (
	"bytes"
	"io"
	"net/http/httptest"

	"backend/pkg/pluginsdk"

	"github.com/gofiber/fiber/v2"
	"github.com/hashicorp/go-plugin"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type BeritaPlugin struct {
	app *fiber.App
}

func (p *BeritaPlugin) InitDatabase(connectionString string) error {
	var err error
	DB, err = gorm.Open(postgres.Open(connectionString), &gorm.Config{})
	if err != nil {
		return err
	}
	
	// Auto Migrate
	return DB.AutoMigrate(&Berita{}, &Kategori{})
}

func (p *BeritaPlugin) HandleRequest(req pluginsdk.HTTPRequest) (pluginsdk.HTTPResponse, error) {
	// Construct standard http.Request
	httpReq := httptest.NewRequest(req.Method, req.Path, bytes.NewReader(req.Body))
	for k, v := range req.Headers {
		httpReq.Header.Set(k, v)
	}

	// Content-Type might be needed for BodyParser
	if contentType, ok := req.Headers["Content-Type"]; ok {
		httpReq.Header.Set("Content-Type", contentType)
	}

	// Process with Fiber
	httpResp, err := p.app.Test(httpReq, -1) // -1 disables timeout
	if err != nil {
		return pluginsdk.HTTPResponse{StatusCode: 500}, err
	}

	// Convert http.Response back to pluginsdk.HTTPResponse
	bodyBytes, _ := io.ReadAll(httpResp.Body)
	resp := pluginsdk.HTTPResponse{
		StatusCode: httpResp.StatusCode,
		Body:       bodyBytes,
		Headers:    make(map[string]string),
	}
	
	for k, v := range httpResp.Header {
		if len(v) > 0 {
			resp.Headers[k] = v[0]
		}
	}
	
	return resp, nil
}

func main() {
	app := fiber.New()
	
	// Register Routes
	app.Get("/berita", GetAllBerita)
	app.Get("/berita/:id", GetBeritaByID)
	app.Get("/kategori", GetAllKategori)
	
	app.Post("/kategori", CreateKategori)
	app.Put("/kategori/:id", UpdateKategori)
	app.Delete("/kategori/:id", DeleteKategori)
	
	app.Post("/berita", CreateBerita)
	app.Put("/berita/:id", UpdateBerita)
	app.Delete("/berita/:id", DeleteBerita)
	
	app.Post("/upload", UploadMedia)

	beritaPlugin := &BeritaPlugin{
		app: app,
	}

	plugin.Serve(&plugin.ServeConfig{
		HandshakeConfig: pluginsdk.HandshakeConfig,
		Plugins: map[string]plugin.Plugin{
			"cms_plugin": &pluginsdk.CMSPluginPlugin{Impl: beritaPlugin},
		},
	})
}
