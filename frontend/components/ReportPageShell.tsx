"use client";

import { ReactNode } from "react";
import { Plus, Filter, Download, type LucideIcon } from "lucide-react";

interface ReportPageShellProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  iconBg?: string;
  children?: ReactNode;
}

export default function ReportPageShell({
   title,
  description,
  icon: Icon,
  iconColor = "text-blue-700",
  iconBg = "bg-blue-50",
  children,
}: ReportPageShellProps) {
  return (
    <div className="flex flex-1 flex-col">
      {/* ── Page Header ── */}
      <div className="border-b border-slate-200/80 bg-white px-8 py-6">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${iconBg}`}
            >
              <Icon size={22} className={iconColor} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
              <p className="mt-1 text-sm text-slate-400">{description}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-slate-300 hover:shadow"
            >
              <Filter size={14} />
              Filter
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-slate-600 shadow-sm transition-all hover:border-slate-300 hover:shadow"
            >
              <Download size={14} />
              Export
            </button>
            <button
              type="button"
              className="flex items-center gap-2 rounded-lg bg-gradient-to-r from-blue-900 to-blue-800 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-blue-900/20 transition-all hover:shadow-lg active:scale-[0.97]"
            >
              <Plus size={16} strokeWidth={2.5} />
              Tambah Laporan
            </button>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex-1 p-8">
        {children ?? <EmptyReportState title={title} />}
      </div>
    </div>
  );
}

/*Default empty state*/
function EmptyReportState({ title }: { title: string }) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="animate-fade-in-up text-center">
        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 shadow-inner">
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-slate-300"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14,2 14,8 20,8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <line x1="10" y1="9" x2="8" y2="9" />
          </svg>
        </div>
        <h3 className="mb-1.5 text-lg font-bold text-slate-600">
          Belum Ada Data
        </h3>
        <p className="mx-auto max-w-xs text-sm text-slate-400">
          Data {title} belum tersedia. Klik &quot;Tambah Laporan&quot; untuk membuat entri baru.
        </p>
      </div>
    </div>
  );
}
