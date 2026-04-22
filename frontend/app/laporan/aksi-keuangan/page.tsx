import ReportPageShell from "@/components/ReportPageShell";
import { Landmark } from "lucide-react";

export default function LaporanAksiKeuanganPage() {
  return (
    <ReportPageShell
      title="Laporan Aksi Keuangan Berkelanjutan"
      description="Pelaporan aksi keuangan berkelanjutan sesuai ketentuan OJK"
      icon={Landmark}
      iconColor="text-teal-500"
      iconBg="bg-teal-50"
    />
  );
}
