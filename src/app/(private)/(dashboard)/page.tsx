import { AppHeader } from "@/components/AppHeader";
import { DashboardSummary } from "./components/DashboardSummary";
import { SalesChart } from "./components/SalesChart";

export default function Dashboard() {
  return (
    <div>
      <AppHeader></AppHeader>
      <main className="px-[2.5rem]">
        <DashboardSummary></DashboardSummary>
        <section className="w-[40rem]">
          <SalesChart></SalesChart>
        </section>
      </main>
    </div>
  );
}
