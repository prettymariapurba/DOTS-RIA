import ReportPageShell from "@/components/ReportPageShell";
import { FileCheck } from "lucide-react";

export default function LaporanAPKAPPage() {
  return (
    <ReportPageShell
      title="Laporan AP KAP"
      description="Laporan penunjukan Akuntan Publik / Kantor Akuntan Publik"
      icon={FileCheck}
      iconColor="text-cyan-500"
      iconBg="bg-cyan-50"
    />
  );
}
