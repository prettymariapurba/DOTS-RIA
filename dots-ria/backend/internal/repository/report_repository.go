package repository

import (
	"sync"
	"time"

	"dots-ria-backend/internal/model"

	"github.com/google/uuid"
)

// ReportRepository defines the contract for report persistence.
type ReportRepository interface {
	FindAll(year int, reportType string) ([]model.Report, error)
	FindByID(id string) (*model.Report, error)
	Create(report *model.Report) error
}

// --------------------------------------------------------------------------
// In-memory implementation (swap with a real DB adapter in production)
// --------------------------------------------------------------------------

type inMemoryReportRepo struct {
	mu      sync.RWMutex
	reports []model.Report
}

// NewInMemoryReportRepository returns a repository backed by an in-memory slice.
func NewInMemoryReportRepository() ReportRepository {
	return &inMemoryReportRepo{
		reports: seedReports(),
	}
}

func (r *inMemoryReportRepo) FindAll(year int, reportType string) ([]model.Report, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	var result []model.Report
	for _, rpt := range r.reports {
		if year > 0 && rpt.Year != year {
			continue
		}
		if reportType != "" && rpt.Type != reportType {
			continue
		}
		result = append(result, rpt)
	}
	return result, nil
}

func (r *inMemoryReportRepo) FindByID(id string) (*model.Report, error) {
	r.mu.RLock()
	defer r.mu.RUnlock()

	for _, rpt := range r.reports {
		if rpt.ID == id {
			return &rpt, nil
		}
	}
	return nil, nil
}

func (r *inMemoryReportRepo) Create(report *model.Report) error {
	r.mu.Lock()
	defer r.mu.Unlock()

	report.ID = uuid.New().String()
	report.Status = "draft"
	report.CreatedAt = time.Now()
	report.UpdatedAt = time.Now()

	r.reports = append(r.reports, *report)
	return nil
}

// --------------------------------------------------------------------------
// Seed data for demo purposes
// --------------------------------------------------------------------------

func seedReports() []model.Report {
	now := time.Now()
	return []model.Report{
		{
			ID:        uuid.New().String(),
			Title:     "Laporan Insidentil Q1 2026",
			Type:      "insidentil",
			Status:    "approved",
			Year:      2026,
			CreatedAt: now.AddDate(0, -2, 0),
			UpdatedAt: now.AddDate(0, -1, 0),
		},
		{
			ID:        uuid.New().String(),
			Title:     "Laporan Tata Kelola 2025",
			Type:      "tata-kelola",
			Status:    "submitted",
			Year:      2025,
			CreatedAt: now.AddDate(0, -6, 0),
			UpdatedAt: now.AddDate(0, -5, 0),
		},
		{
			ID:        uuid.New().String(),
			Title:     "Laporan Tahunan 2025",
			Type:      "tahunan",
			Status:    "draft",
			Year:      2025,
			CreatedAt: now.AddDate(0, -1, 0),
			UpdatedAt: now,
		},
	}
}
