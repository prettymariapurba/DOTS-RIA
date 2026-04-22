import ReportPageShell from "@/components/ReportPageShell";
import { ShieldCheck } from "lucide-react";

export default function LaporanTataKelolaPage() {
  return (
    <ReportPageShell
      title="Laporan Tata Kelola"
      description="Laporan pelaksanaan tata kelola (Good Corporate Governance) BPR"
      icon={ShieldCheck}
      iconColor="text-emerald-500"
      iconBg="bg-emerald-50"
    />
  );
}
