package service

import (
	"errors"

	"dots-ria-backend/internal/model"
	"dots-ria-backend/internal/repository"
)

// ReportService handles business logic for reports.
type ReportService interface {
	GetAllReports(year int, reportType string) ([]model.Report, int, error)
	GetReportByID(id string) (*model.Report, error)
	CreateReport(req model.CreateReportRequest) (*model.Report, error)
}

type reportService struct {
	repo repository.ReportRepository
}

// NewReportService returns a new service wired to the given repository.
func NewReportService(repo repository.ReportRepository) ReportService {
	return &reportService{repo: repo}
}

func (s *reportService) GetAllReports(year int, reportType string) ([]model.Report, int, error) {
	reports, err := s.repo.FindAll(year, reportType)
	if err != nil {
		return nil, 0, err
	}
	return reports, len(reports), nil
}

func (s *reportService) GetReportByID(id string) (*model.Report, error) {
	report, err := s.repo.FindByID(id)
	if err != nil {
		return nil, err
	}
	if report == nil {
		return nil, errors.New("report not found")
	}
	return report, nil
}

func (s *reportService) CreateReport(req model.CreateReportRequest) (*model.Report, error) {
	report := &model.Report{
		Title: req.Title,
		Type:  req.Type,
		Year:  req.Year,
	}

	if err := s.repo.Create(report); err != nil {
		return nil, err
	}

	return report, nil
}
