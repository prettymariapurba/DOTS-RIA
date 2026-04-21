package model

import "time"

// Report represents a BPR report entity.
type Report struct {
	ID        string    `json:"id"`
	Title     string    `json:"title"`
	Type      string    `json:"type"` // e.g. "insidentil", "tata-kelola", "profil-resiko", etc.
	Status    string    `json:"status"` // "draft" | "submitted" | "reviewed" | "approved"
	Year      int       `json:"year"`
	CreatedAt time.Time `json:"created_at"`
	UpdatedAt time.Time `json:"updated_at"`
}

// CreateReportRequest is the request body for creating a new report.
type CreateReportRequest struct {
	Title string `json:"title" binding:"required"`
	Type  string `json:"type"  binding:"required"`
	Year  int    `json:"year"  binding:"required,min=2020"`
}

// ApiResponse wraps a single entity in a consistent envelope.
type ApiResponse struct {
	Success bool        `json:"success"`
	Data    interface{} `json:"data,omitempty"`
	Message string      `json:"message,omitempty"`
}

// PaginatedResponse wraps a list of entities with pagination metadata.
type PaginatedResponse struct {
	Success bool        `json:"success"`
	Data    interface{} `json:"data"`
	Total   int         `json:"total"`
	Page    int         `json:"page"`
	PerPage int         `json:"per_page"`
}
