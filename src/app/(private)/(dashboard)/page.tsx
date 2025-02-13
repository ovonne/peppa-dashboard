import { AppHeader } from "@/components/AppHeader";
import { SelectFilterSummaryCard } from "@/components/DashboardSummaryCard/components/SelectFilterSummaryCard";
import {
  DashboardSummaryCard,
  DashboardSummaryCardContent,
  DashboardSummaryCardHeader,
  DashboardSummaryCardIcon,
  DashboardSummaryCardItem,
  DashboardSummaryCardTitle,
} from "@/components/DashboardSummaryCard/Index";
import {
  EngagementStatsCard,
  EngagementStatsCardContent,
  EngagementStatsCardHeader,
  EngagementStatsCardIcon,
  EngagementStatsCardItem,
} from "@/components/EngagementStatsCard";
import { ShoppingBasket, UsersRound } from "lucide-react";
import { DashboardSummary } from "./components/DashboardSummary";
import { RecentRequests } from "./components/Requests";
import { SalesChart } from "./components/SalesChart";

const item = {
  id: 1,
  icon: ShoppingBasket,
  title: "Cart",
  items: [
    {
      title: "Abandoned cart",
      value: 100,
      percentage: 10,
    },
    {
      title: "In charge",
      value: 0,
    },
  ],
};
const EngagementStatsItem = {
  id: 1,
  icon: ShoppingBasket,
  title: "Cart",
  items: [
    {
      title: "In charge",
      value: 45,
    },
    {
      title: "Active",
      value: 0,
      percentage: 3,
    },
  ],
};

export default function Dashboard() {
  return (
    <div className="pb-[10rem]">
      <AppHeader></AppHeader>
      <main className="px-[2.5rem]">
        <DashboardSummary></DashboardSummary>

        <section className="flex flex-wrap gap-[2rem]">
          <div className="w-[40rem]">
            <SalesChart></SalesChart>
          </div>
          <div className="space-y-[2rem]">
            <DashboardSummaryCard>
              <DashboardSummaryCardHeader>
                <div className="flex gap-[1rem] items-center">
                  <DashboardSummaryCardIcon icon={ShoppingBasket} />
                  <DashboardSummaryCardTitle>Cart</DashboardSummaryCardTitle>
                </div>
                <SelectFilterSummaryCard />
              </DashboardSummaryCardHeader>
              <DashboardSummaryCardContent>
                {item.items.map((data, index) => (
                  <DashboardSummaryCardItem
                    key={index}
                    title={data.title}
                    value={data.value}
                    percentage={data.percentage}
                  />
                ))}
              </DashboardSummaryCardContent>
            </DashboardSummaryCard>
            <EngagementStatsCard>
              <EngagementStatsCardHeader>
                <div className="flex gap-[1rem] items-center">
                  <EngagementStatsCardIcon icon={UsersRound} />
                </div>
              </EngagementStatsCardHeader>
              <EngagementStatsCardContent>
                {EngagementStatsItem.items.map((data, index) => (
                  <EngagementStatsCardItem
                    key={index}
                    title={data.title}
                    value={data.value}
                    percentage={data.percentage}
                  />
                ))}
              </EngagementStatsCardContent>
            </EngagementStatsCard>
          </div>
          <RecentRequests></RecentRequests>
        </section>
      </main>
    </div>
  );
}
