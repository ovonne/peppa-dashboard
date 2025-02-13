import { SelectFilterSummaryCard } from "@/components/DashboardSummaryCard/components/SelectFilterSummaryCard";
import {
  DashboardSummaryCard,
  DashboardSummaryCardContent,
  DashboardSummaryCardHeader,
  DashboardSummaryCardIcon,
  DashboardSummaryCardItem,
  DashboardSummaryCardTitle,
} from "@/components/DashboardSummaryCard/Index";
import { summaryData } from "@/store/Summary";

export function DashboardSummary() {
  return (
    <div className="flex flex-wrap gap-[2rem]  py-[1.8rem]">
      {summaryData.map((item) => (
        <DashboardSummaryCard key={item.id}>
          <DashboardSummaryCardHeader>
            <div className="flex gap-[1rem] items-center">
              <DashboardSummaryCardIcon icon={item.icon} />
              <DashboardSummaryCardTitle>
                {item.title}
              </DashboardSummaryCardTitle>
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
      ))}
    </div>
  );
}
