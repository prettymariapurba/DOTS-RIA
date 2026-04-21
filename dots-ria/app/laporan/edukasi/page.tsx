import ReportPageShell from "@/components/ReportPageShell";
import { GraduationCap } from "lucide-react";

export default function LaporanEdukasiPage() {
  return (
    <ReportPageShell
      title="Laporan Edukasi & Perlindungan Nasabah"
      description="Pelaporan kegiatan edukasi keuangan dan perlindungan konsumen"
      icon={GraduationCap}
      iconColor="text-sky-500"
      iconBg="bg-sky-50"
    />
  );
}
