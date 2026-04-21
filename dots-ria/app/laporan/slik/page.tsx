import ReportPageShell from "@/components/ReportPageShell";
import { Database } from "lucide-react";

export default function SLIKPage() {
  return (
    <ReportPageShell
      title="SLIK"
      description="Sistem Layanan Informasi Keuangan — pelaporan data debitur ke OJK"
      icon={Database}
      iconColor="text-emerald-500"
      iconBg="bg-emerald-50"
    />
  );
}
