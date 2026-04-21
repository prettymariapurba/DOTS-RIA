/* ──────────────────────────────────────────────
 * DOTS RIA — API Client
 * Centralised fetch wrapper for the Go backend.
 * ────────────────────────────────────────────── */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

/* ─── Types ─── */

export interface Report {
  id: string;
  title: string;
  type: string;
  status: "draft" | "submitted" | "reviewed" | "approved";
  year: number;
  created_at: string;
  updated_at: string;
}

export interface CreateReportPayload {
  title: string;
  type: string;
  year: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  total: number;
  page: number;
  per_page: number;
}

/* ─── Helpers ─── */

async function request<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const url = `${API_BASE_URL}${path}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(
      (errorBody as { message?: string }).message ??
        `API Error: ${res.status} ${res.statusText}`
    );
  }

  return res.json() as Promise<T>;
}

/* ─── Report API ─── */

export const reportApi = {
  /** Get all reports with optional filtering */
  getAll: (params?: { year?: number; type?: string; page?: number }) => {
    const query = new URLSearchParams();
    if (params?.year) query.set("year", String(params.year));
    if (params?.type) query.set("type", params.type);
    if (params?.page) query.set("page", String(params.page));

    const qs = query.toString();
    return request<PaginatedResponse<Report>>(
      `/reports${qs ? `?${qs}` : ""}`
    );
  },

  /** Get a single report by ID */
  getById: (id: string) =>
    request<ApiResponse<Report>>(`/reports/${id}`),

  /** Create a new report */
  create: (payload: CreateReportPayload) =>
    request<ApiResponse<Report>>("/reports", {
      method: "POST",
      body: JSON.stringify(payload),
    }),
};
