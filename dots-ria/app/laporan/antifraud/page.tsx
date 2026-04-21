import ReportPageShell from "@/components/ReportPageShell";
import { ShieldAlert } from "lucide-react";

export default function LaporanAntifraudPage() {
  return (
    <ReportPageShell
      title="Laporan Strategi Anti Fraud"
      description="Pelaporan pelaksanaan strategi anti fraud pada BPR"
      icon={ShieldAlert}
      iconColor="text-red-500"
      iconBg="bg-red-50"
    />
  );
}
