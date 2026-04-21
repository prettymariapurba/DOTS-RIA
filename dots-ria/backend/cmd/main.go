package main

import (
	"log"

	"dots-ria-backend/internal/handler"
	"dots-ria-backend/internal/repository"
	"dots-ria-backend/internal/service"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func main() {
	// ── Dependency injection (wire layers bottom-up) ──
	repo := repository.NewInMemoryReportRepository()
	svc := service.NewReportService(repo)
	reportHandler := handler.NewReportHandler(svc)

	// ── Gin engine ──
	r := gin.Default()

	// CORS — allow the Next.js frontend
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Authorization"},
		AllowCredentials: true,
	}))

	// ── Health check ──
	r.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"status":  "ok",
			"service": "dots-ria-backend",
		})
	})

	// ── Register routes ──
	reportHandler.RegisterRoutes(r)

	// ── Start server ──
	port := ":8080"
	log.Printf("🚀 DOTS RIA Backend running on %s", port)
	if err := r.Run(port); err != nil {
		log.Fatalf("failed to start server: %v", err)
	}
}
