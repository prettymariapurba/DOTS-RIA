import ReportPageShell from "@/components/ReportPageShell";
import { Fingerprint } from "lucide-react";

export default function LaporanIRAAPUPPTPage() {
  return (
    <ReportPageShell
      title="Laporan IRA-APUPPT"
      description="Laporan Inherent Risk Assessment - Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme"
      icon={Fingerprint}
      iconColor="text-orange-500"
      iconBg="bg-orange-50"
    />
  );
}
