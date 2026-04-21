import { FileSearch, Filter, Calendar } from "lucide-react";

export default function ReviewLapbulPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Page Header */}
      <div className="border-b border-slate-200/80 bg-white px-8 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Review Lapbul</h1>
            <p className="mt-1 text-sm text-slate-400">
              Periksa dan verifikasi laporan bulanan yang telah diunggah
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <Filter size={14} />
              Filter
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <Calendar size={14} />
              Periode
            </button>
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="animate-fade-in-up text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50">
            <FileSearch size={36} className="text-indigo-300" strokeWidth={1.5} />
          </div>
          <h2 className="mb-2 text-lg font-bold text-slate-700">
            Belum Ada Laporan untuk Direview
          </h2>
          <p className="mx-auto max-w-sm text-sm text-slate-400">
            Laporan bulanan yang telah diunggah akan muncul di sini untuk proses review.
          </p>
        </div>
      </div>
    </div>
  );
}
