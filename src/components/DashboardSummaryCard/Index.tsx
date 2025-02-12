import { Home } from "lucide-react";
import type { ElementType } from "react";
import { SelectFilterSummaryCard } from "./components/SelectFilterSummaryCard";
interface DashboardSummaryCardIconProps {
  icon: ElementType;
}

function DashboardSummaryCardIcon({
  icon: Icon,
}: DashboardSummaryCardIconProps) {
  return (
    <div className="bg-highlighted/10 h-[3.6rem] w-[3.6rem] flex justify-center items-center rounded-[1.2rem]">
      <Icon size={20} className="text-highlighted"></Icon>
    </div>
  );
}

interface DashboardSummaryCardTitleProps {
  children: React.ReactNode;
}
function DashboardSummaryCardTitle({
  children,
}: DashboardSummaryCardTitleProps) {
  return <p className="text-[1.2rem] font-semibold">{children}</p>;
}

interface DashboardSummaryCardHeaderProps {
  children: React.ReactNode;
}

function DashboardSummaryCardHeader({
  children,
}: DashboardSummaryCardHeaderProps) {
  return <div className="flex justify-between items-center">{children}</div>;
}

export function DashboardSummaryCard() {
  return (
    <div className="bg-white rounded-[1.2rem] px-[1.5rem] py-[1.1rem] w-[34.4rem] text-darkGray">
      <DashboardSummaryCardHeader>
        <div className="flex gap-[1rem] items-center">
          <DashboardSummaryCardIcon icon={Home} />
          <DashboardSummaryCardTitle>Total</DashboardSummaryCardTitle>
        </div>
        <SelectFilterSummaryCard></SelectFilterSummaryCard>
      </DashboardSummaryCardHeader>
      <div className="flex justify-between mt-[3.1rem]">
        <div className="w-[45%]">
          <p className="text-[1.4rem] text-Gray mb-[0.8rem]">Sales</p>
          <h2 className="text-[2rem] font-medium">
            KZ 0.00 <span className="text-medGreen text-[1.2rem]">+0.00%</span>
          </h2>
        </div>
        <div className="w-[45%]">
          <p className="text-[1.4rem] text-Gray mb-[0.8rem]">Volume</p>
          <h2 className="text-[2rem] font-medium">0</h2>
        </div>
      </div>
    </div>
  );
}
