import ReportPageShell from "@/components/ReportPageShell";
import { ClipboardList } from "lucide-react";

export default function LaporanRealisasiRBBPage() {
  return (
    <ReportPageShell
      title="Laporan Realisasi RBB"
      description="Pelaporan realisasi Rencana Bisnis Bank (RBB) secara periodik"
      icon={ClipboardList}
      iconColor="text-violet-500"
      iconBg="bg-violet-50"
    />
  );
}
