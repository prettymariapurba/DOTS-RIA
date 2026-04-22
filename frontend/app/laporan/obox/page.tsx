import ReportPageShell from "@/components/ReportPageShell";
import { Box } from "lucide-react";

export default function OBOXPage() {
  return (
    <ReportPageShell
      title="OBOX"
      description="Pelaporan dan pengelolaan data Off-Balance Sheet & Box reporting"
      icon={Box}
      iconColor="text-fuchsia-500"
      iconBg="bg-fuchsia-50"
    />
  );
}
