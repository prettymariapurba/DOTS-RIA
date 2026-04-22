import { Upload, FileUp, CheckCircle } from "lucide-react";

export default function UnggahLapbulPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Page Header */}
      <div className="border-b border-slate-200/80 bg-white px-8 py-6">
        <h1 className="text-2xl font-bold text-slate-800">Unggah Laporan Bulanan</h1>
        <p className="mt-1 text-sm text-slate-400">
          Unggah file laporan bulanan untuk diproses
        </p>
      </div>

      {/* Upload Area */}
      <div className="flex flex-1 items-center justify-center p-8">
        <div className="animate-fade-in-up w-full max-w-lg">
          {/* Dropzone */}
          <div className="group cursor-pointer rounded-2xl border-2 border-dashed border-slate-200 bg-white p-12 text-center transition-all duration-200 hover:border-indigo-300 hover:bg-indigo-50/30">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-50 transition-colors group-hover:bg-indigo-100">
              <FileUp size={28} className="text-indigo-400" />
            </div>
            <p className="text-sm font-semibold text-slate-700">
              Drag & drop file di sini
            </p>
            <p className="mt-1 text-xs text-slate-400">
              atau klik untuk memilih file (xlsx, csv, pdf)
            </p>
            <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:shadow-md">
              <Upload size={14} />
              Pilih File
            </button>
          </div>

          {/* Upload history placeholder */}
          <div className="mt-6 rounded-xl border border-slate-100 bg-white p-4">
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              Riwayat Unggahan Terakhir
            </p>
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <CheckCircle size={14} className="text-slate-300" />
              Belum ada riwayat unggahan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
