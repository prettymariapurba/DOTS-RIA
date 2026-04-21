# DOTS RIA — Reporting Hub BPR

<div align="center">
  <h3>🏦 Sistem Pelaporan Terpusat untuk Bank Perkreditan Rakyat</h3>
  <p>Next.js 16 · TypeScript · Tailwind CSS v4 · Go (Gin) · Clean Architecture</p>
</div>

---

## Struktur Project

```
dots-ria/
├── app/                          # Next.js App Router pages
│   ├── layout.tsx                # Root layout (Sidebar + Topbar)
│   ├── page.tsx                  # Dashboard
│   ├── globals.css               # Design system & global styles
│   ├── review-lapbul/page.tsx
│   ├── unggah-lapbul/page.tsx
│   ├── regulasi/page.tsx
│   └── laporan/
│       ├── insidentil/page.tsx
│       ├── tata-kelola/page.tsx
│       ├── profil-resiko/page.tsx
│       ├── tahunan/page.tsx
│       ├── aksi-keuangan/page.tsx
│       ├── realisasi-rbb/page.tsx
│       ├── antifraud/page.tsx
│       ├── ira-apuppt/page.tsx
│       ├── edukasi/page.tsx
│       ├── ap-kap/page.tsx
│       ├── obox/page.tsx
│       ├── lapbul/page.tsx
│       └── slik/page.tsx
├── components/
│   ├── Sidebar.tsx               # Fixed sidebar with dropdown
│   ├── Topbar.tsx                # Sticky topbar
│   ├── DashboardEmpty.tsx        # Empty state widget
│   └── ReportPageShell.tsx       # Reusable report page layout
├── lib/
│   └── api.ts                    # Typed fetch client
├── backend/
│   ├── cmd/main.go               # Entry point
│   ├── go.mod
│   └── internal/
│       ├── model/report.go       # Domain models
│       ├── repository/           # Data access layer
│       ├── service/              # Business logic
│       └── handler/              # HTTP handlers (Gin)
└── .env.local                    # Frontend env vars
```

## Menjalankan Frontend

```bash
# Install dependencies
npm install lucide-react

# Start dev server
npm run dev
```

Buka: http://localhost:3000

## Menjalankan Backend (Go)

```bash
cd backend

# Download dependencies
go mod tidy

# Run server
go run cmd/main.go
```

API berjalan di: http://localhost:8080

## API Endpoints

| Method | Endpoint        | Deskripsi               |
|--------|-----------------|-------------------------|
| GET    | /health         | Health check            |
| GET    | /reports        | List semua laporan      |
| GET    | /reports/:id    | Detail laporan          |
| POST   | /reports        | Buat laporan baru       |

### Contoh POST /reports

```json
{
  "title": "Laporan Insidentil Q2 2026",
  "type": "insidentil",
  "year": 2026
}
```
