import ReportPageShell from "@/components/ReportPageShell";
import { CalendarCheck } from "lucide-react";

export default function LaporanTahunanPage() {
  return (
    <ReportPageShell
      title="Laporan Tahunan"
      description="Laporan kinerja tahunan BPR yang disampaikan ke OJK dan pemangku kepentingan"
      icon={CalendarCheck}
      iconColor="text-blue-500"
      iconBg="bg-blue-50"
    />
  );
}
