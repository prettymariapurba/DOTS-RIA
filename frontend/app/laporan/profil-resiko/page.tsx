import ReportPageShell from "@/components/ReportPageShell";
import { BarChart3 } from "lucide-react";

export default function LaporanProfilResikoPage() {
  return (
    <ReportPageShell
      title="Laporan Profil Resiko"
      description="Penilaian dan pelaporan profil risiko BPR secara berkala"
      icon={BarChart3}
      iconColor="text-rose-500"
      iconBg="bg-rose-50"
    />
  );
}
