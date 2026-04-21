import DashboardEmpty from "@/components/DashboardEmpty";

export default function DashboardPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* ── Page Header ── */}
      <div className="border-b border-slate-200/80 bg-white px-8 py-6">
        <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
        <p className="mt-1 text-sm text-slate-400">
          Ringkasan aktivitas pelaporan BPR Anda
        </p>

        {/* Stats Row — placeholder for future data */}
        <div className="mt-5 grid grid-cols-4 gap-4">
          {[
            { label: "Total Laporan", value: "0", color: "from-indigo-500 to-indigo-600" },
            { label: "Menunggu Review", value: "0", color: "from-amber-500 to-orange-500" },
            { label: "Disetujui", value: "0", color: "from-emerald-500 to-green-500" },
            { label: "Draft", value: "0", color: "from-slate-400 to-slate-500" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-xl border border-slate-100 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              <div
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${stat.color}`}
              />
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              <p className="mt-0.5 text-xs font-medium text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Empty State ── */}
      <DashboardEmpty />
    </div>
  );
}
