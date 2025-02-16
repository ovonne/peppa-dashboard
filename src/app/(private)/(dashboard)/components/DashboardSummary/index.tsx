import {
  DashboardSummaryCard,
  DashboardSummaryCardContent,
  DashboardSummaryCardHeader,
  DashboardSummaryCardIcon,
  DashboardSummaryCardItem,
  DashboardSummaryCardTitle,
} from "@/components/DashboardSummaryCard";
import { SelectFilterSummaryCard } from "@/components/DashboardSummaryCard/components/SelectFilterSummaryCard";
import { summaryData } from "@/store/Summary";

export function DashboardSummary() {
  return (
    <div className="flex flex-wrap gap-[2rem] py-[1.8rem]">
      {summaryData.map((item) => (
        <DashboardSummaryCard key={item.id}>
          <DashboardSummaryCardHeader>
            <div className="flex items-center gap-[1rem]">
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
