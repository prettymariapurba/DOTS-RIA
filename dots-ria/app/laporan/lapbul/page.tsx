import ReportPageShell from "@/components/ReportPageShell";
import { FileText } from "lucide-react";

export default function LapbulPage() {
  return (
    <ReportPageShell
      title="Lapbul"
      description="Laporan Bulanan BPR yang disampaikan secara rutin setiap bulan"
      icon={FileText}
      iconColor="text-indigo-500"
      iconBg="bg-indigo-50"
    />
  );
}
