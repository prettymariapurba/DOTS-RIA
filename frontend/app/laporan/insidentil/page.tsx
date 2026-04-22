import ReportPageShell from "@/components/ReportPageShell";
import { AlertTriangle } from "lucide-react";

export default function LaporanInsidentilPage() {
  return (
    <ReportPageShell
      title="Laporan Insidentil"
      description="Kelola laporan kejadian insidentil yang memerlukan pelaporan segera ke OJK"
      icon={AlertTriangle}
      iconColor="text-amber-500"
      iconBg="bg-amber-50"
    />
  );
}
