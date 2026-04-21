"use client";

import { FolderOpen, Plus } from "lucide-react";

export default function DashboardEmpty() {
  return (
    <div className="flex flex-1 items-center justify-center p-8">
      <div className="animate-fade-in-up text-center">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 shadow-inner">
          <FolderOpen size={40} className="text-slate-300" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h2 className="mb-2 text-xl font-bold text-slate-700">
          Belum Ada Laporan
        </h2>

        {/* Subtitle */}
        <p className="mx-auto mb-8 max-w-sm text-sm leading-relaxed text-slate-400">
          Klik tombol &quot;Buat Laporan Baru&quot; untuk membuat laporan baru
          dan mulai mengelola pelaporan BPR Anda.
        </p>

        {/* CTA */}
        <button
          id="empty-state-cta"
          type="button"
          className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-200 hover:from-indigo-500 hover:to-indigo-400 hover:shadow-xl hover:shadow-indigo-500/30 active:scale-[0.97]"
        >
          <Plus size={18} strokeWidth={2.5} />
          Buat Laporan Baru
        </button>

        {/* Decorative dots */}
        <div className="mt-10 flex items-center justify-center gap-1.5">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 rounded-full bg-slate-200"
              style={{ animationDelay: `${i * 200}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
