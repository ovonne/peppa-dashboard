import { AppHeader } from "@/components/AppHeader";
import { DashboardSummary } from "./components/DashboardSummary";
import { RecentRequests } from "./components/Requests";
import { SalesChart } from "./components/SalesChart";

export default function Dashboard() {
  return (
    <div className="pb-[10rem]">
      <AppHeader></AppHeader>
      <main className="px-[2.5rem]">
        <DashboardSummary></DashboardSummary>

        <section className="flex justify-between">
          <div className="w-[40rem]">
            <SalesChart></SalesChart>
          </div>

          <RecentRequests></RecentRequests>
        </section>
      </main>
    </div>
  );
}
