"use client";

import { useState } from "react";
import { Plus, ChevronDown, Bell, Search, User } from "lucide-react";

export default function Topbar() {
  const [yearFilter, setYearFilter] = useState("Semua Tahun");
  const [yearOpen, setYearOpen] = useState(false);

  const years = ["Semua Tahun", "2026", "2025", "2024", "2023"];

  return (
    <header
      id="topbar"
      className="sticky top-0 z-30 flex items-center justify-between border-b px-6"
      style={{
        height: "var(--topbar-height)",
        background: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(12px)",
        borderColor: "var(--surface-border)",
      }}
    >
      {/* ── Left: Search ── */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 transition-all duration-200 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-500/20">
          <Search size={16} className="text-slate-400" />
          <input
            id="topbar-search"
            type="text"
            placeholder="Cari laporan..."
            className="w-48 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
          />
        </div>
      </div>

      {/* ── Right: Actions ── */}
      <div className="flex items-center gap-3">
        {/* Year Filter */}
        <div className="relative">
          <button
            id="year-filter-btn"
            type="button"
            onClick={() => setYearOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all duration-200 hover:border-slate-300 hover:shadow"
          >
            {yearFilter}
            <ChevronDown
              size={14}
              className={`text-slate-400 transition-transform duration-200 ${yearOpen ? "rotate-180" : ""}`}
            />
          </button>

          {yearOpen && (
            <div className="absolute right-0 top-full mt-1 w-40 rounded-lg border border-slate-200 bg-white py-1 shadow-lg animate-fade-in-up">
              {years.map((year) => (
                <button
                  key={year}
                  type="button"
                  onClick={() => {
                    setYearFilter(year);
                    setYearOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-left text-sm transition-colors ${
                    yearFilter === year
                      ? "bg-indigo-50 font-medium text-indigo-600"
                      : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {year}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Notification */}
        <button
          id="notification-btn"
          type="button"
          className="relative rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
        >
          <Bell size={20} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500" />
        </button>

        {/* New Report Button */}
        <button
          id="btn-buat-laporan"
          type="button"
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/25 transition-all duration-200 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-lg hover:shadow-indigo-500/30 active:scale-[0.97]"
        >
          <Plus size={16} strokeWidth={2.5} />
          Buat Laporan Baru
        </button>

        {/* Divider */}
        <div className="mx-1 h-8 w-px bg-slate-200" />

        {/* User Profile */}
        <button
          id="user-profile-btn"
          type="button"
          className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors hover:bg-slate-100"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500">
            <User size={14} className="text-white" />
          </div>
          <div className="text-left">
            <p className="text-sm font-semibold leading-tight text-slate-700">Admin</p>
            <p className="text-[11px] leading-tight text-slate-400">Supervisor</p>
          </div>
          <ChevronDown size={14} className="text-slate-400" />
        </button>
      </div>
    </header>
  );
}
