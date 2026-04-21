package handler

import (
	"net/http"
	"strconv"

	"dots-ria-backend/internal/model"
	"dots-ria-backend/internal/service"

	"github.com/gin-gonic/gin"
)

// ReportHandler exposes HTTP endpoints for reports.
type ReportHandler struct {
	svc service.ReportService
}

// NewReportHandler wires a handler to the given service.
func NewReportHandler(svc service.ReportService) *ReportHandler {
	return &ReportHandler{svc: svc}
}

// RegisterRoutes mounts all report routes onto the given engine.
func (h *ReportHandler) RegisterRoutes(r *gin.Engine) {
	reports := r.Group("/reports")
	{
		reports.GET("", h.GetAllReports)
		reports.GET("/:id", h.GetReportByID)
		reports.POST("", h.CreateReport)
	}
}

// --------------------------------------------------------------------------
// Handlers
// --------------------------------------------------------------------------

// GetAllReports returns a paginated list of reports.
// Query params: year (int), type (string), page (int, default 1).
func (h *ReportHandler) GetAllReports(c *gin.Context) {
	yearStr := c.Query("year")
	reportType := c.Query("type")

	var year int
	if yearStr != "" {
		parsed, err := strconv.Atoi(yearStr)
		if err != nil {
			c.JSON(http.StatusBadRequest, model.ApiResponse{
				Success: false,
				Message: "invalid year parameter",
			})
			return
		}
		year = parsed
	}

	reports, total, err := h.svc.GetAllReports(year, reportType)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.ApiResponse{
			Success: false,
			Message: err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, model.PaginatedResponse{
		Success: true,
		Data:    reports,
		Total:   total,
		Page:    1,
		PerPage: 20,
	})
}

// GetReportByID returns a single report by its ID.
func (h *ReportHandler) GetReportByID(c *gin.Context) {
	id := c.Param("id")

	report, err := h.svc.GetReportByID(id)
	if err != nil {
		status := http.StatusInternalServerError
		if err.Error() == "report not found" {
			status = http.StatusNotFound
		}
		c.JSON(status, model.ApiResponse{
			Success: false,
			Message: err.Error(),
		})
		return
	}

	c.JSON(http.StatusOK, model.ApiResponse{
		Success: true,
		Data:    report,
	})
}

// CreateReport validates the body and creates a new report.
func (h *ReportHandler) CreateReport(c *gin.Context) {
	var req model.CreateReportRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, model.ApiResponse{
			Success: false,
			Message: "validation failed: " + err.Error(),
		})
		return
	}

	report, err := h.svc.CreateReport(req)
	if err != nil {
		c.JSON(http.StatusInternalServerError, model.ApiResponse{
			Success: false,
			Message: err.Error(),
		})
		return
	}

	c.JSON(http.StatusCreated, model.ApiResponse{
		Success: true,
		Data:    report,
		Message: "report created successfully",
	})
}
