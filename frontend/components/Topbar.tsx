"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, ChevronDown, Bell, Search, User, LogOut, Settings, UserCircle } from "lucide-react";
import { useAuth } from "@/lib/auth-context";

export default function Topbar() {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [yearFilter, setYearFilter] = useState("Semua Tahun");
  const [yearOpen, setYearOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const years = ["Semua Tahun", "2026", "2025", "2024", "2023"];

  const handleLogout = () => {
    logout();
  };

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
        <div className="flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-2 transition-all duration-200 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-900/20">
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
        {/* Year Filter ... (kode filter tahun tetap sama) */}
        
        {/* ... (kode notifikasi tetap sama) ... */}

        {/* New Report Button */}
        <button
          id="btn-buat-laporan"
          type="button"
          className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-900 to-blue-800 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-900/25 transition-all hover:from-blue-800 hover:to-blue-700 active:scale-[0.97]"
        >
          <Plus size={16} strokeWidth={2.5} />
          Buat Laporan
        </button>

        <div className="mx-1 h-8 w-px bg-slate-200" />

        {/* ── User Profile Dropdown ── */}
        <div className="relative">
          <button
            id="user-profile-btn"
            type="button"
            onClick={() => setProfileOpen(!profileOpen)}
            className={`flex items-center gap-2.5 rounded-lg px-2 py-1.5 transition-colors ${profileOpen ? 'bg-slate-100' : 'hover:bg-slate-100'}`}
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-800 to-blue-600">
              <User size={14} className="text-white" />
            </div>
            <div className="text-left hidden md:block">
              <p className="text-sm font-semibold leading-tight text-slate-700">{user?.name || "User"}</p>
              <p className="text-[11px] leading-tight text-slate-400">{user?.role || "Staff"}</p>
            </div>
            <ChevronDown size={14} className={`text-slate-400 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Profile Menu Card */}
          {profileOpen && (
            <div className="absolute right-0 top-full mt-2 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white p-1 shadow-xl animate-fade-in-up">
              <div className="px-3 py-2 border-b border-slate-100 mb-1">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Akun Saya</p>
              </div>
              
              <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                <UserCircle size={18} className="text-slate-400" />
                Profil
              </button>
              
              <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 transition-colors">
                <Settings size={18} className="text-slate-400" />
                Pengaturan
              </button>

              <div className="my-1 border-t border-slate-100" />
              
              <button 
                onClick={handleLogout}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 transition-colors"
              >
                <LogOut size={18} />
                Keluar
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay to close profile menu when clicking outside */}
      {profileOpen && (
        <div 
          className="fixed inset-0 z-[-1]" 
          onClick={() => setProfileOpen(false)}
        />
      )}
    </header>
  );
}
