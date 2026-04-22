import { BookOpen, ExternalLink, FileText } from "lucide-react";

const regulasiItems = [
  {
    title: "POJK No. 37/2022",
    desc: "Peraturan tentang Pelaporan BPR melalui Sistem Pelaporan OJK",
    category: "OJK",
  },
  {
    title: "SE OJK No. 14/2023",
    desc: "Surat Edaran tentang Tata Cara Penyampaian Laporan Bulanan BPR",
    category: "OJK",
  },
  {
    title: "POJK No. 12/2021",
    desc: "Penerapan Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme",
    category: "APU-PPT",
  },
  {
    title: "PBI No. 23/2021",
    desc: "Penyelenggaraan Sistem Informasi Debitur (SLIK)",
    category: "BI",
  },
];

export default function RegulasiPage() {
  return (
    <div className="flex flex-1 flex-col">
      {/* Page Header */}
      <div className="border-b border-slate-200/80 bg-white px-8 py-6">
        <h1 className="text-2xl font-bold text-slate-800">Regulasi Terkait</h1>
        <p className="mt-1 text-sm text-slate-400">
          Kumpulan peraturan dan regulasi yang berkaitan dengan pelaporan BPR
        </p>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="grid gap-4">
          {regulasiItems.map((item) => (
            <div
              key={item.title}
              className="animate-fade-in-up group flex items-start gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-200 hover:border-indigo-100 hover:shadow-md"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-50">
                <FileText size={18} className="text-indigo-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-slate-800">{item.title}</h3>
                  <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-500">
                    {item.category}
                  </span>
                </div>
                <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
              </div>
              <button className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-indigo-50 hover:text-indigo-500">
                <ExternalLink size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
