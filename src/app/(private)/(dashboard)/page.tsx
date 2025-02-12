import { AppHeader } from "@/components/AppHeader";
import { DashboardSummary } from "./components/DashboardSummary";

export default function Dashboard() {
  return (
    <div>
      <AppHeader></AppHeader>
      <DashboardSummary></DashboardSummary>
    </div>
  );
}
