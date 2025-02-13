import type { ElementType } from "react";

interface DashboardSummaryCardIconProps {
  icon: ElementType;
}

export function DashboardSummaryCardIcon({
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

export function DashboardSummaryCardTitle({
  children,
}: DashboardSummaryCardTitleProps) {
  return <p className="text-[1.2rem] font-semibold">{children}</p>;
}

interface DashboardSummaryCardHeaderProps {
  children: React.ReactNode;
}

export function DashboardSummaryCardHeader({
  children,
}: DashboardSummaryCardHeaderProps) {
  return <div className="flex justify-between items-center">{children}</div>;
}

interface DashboardSummaryCardContentProps {
  children: React.ReactNode;
}

export function DashboardSummaryCardContent({
  children,
}: DashboardSummaryCardContentProps) {
  return <div className="flex justify-between mt-[3.1rem]">{children}</div>;
}

interface DashboardSummaryCardItemProps {
  title: string;
  value: string | number;
  percentage?: number;
}

export function DashboardSummaryCardItem({
  title,
  value,
  percentage,
}: DashboardSummaryCardItemProps) {
  const isNegative = percentage !== undefined && percentage < 0;

  return (
    <div className="w-[45%]">
      <p className="text-[1.4rem] text-gray-500 mb-[0.8rem]">{title}</p>
      <h2 className="text-[2rem] font-medium">
        {value} <span> </span>
        {percentage !== undefined && (
          <span
            className={`text-[1.2rem] ${
              isNegative ? "text-medRed" : "text-medGreen"
            }`}
          >
            {percentage.toFixed(2)}%
          </span>
        )}
      </h2>
    </div>
  );
}

interface DashboardSummaryCardProps {
  children: React.ReactNode;
  Width?: string;
}

export function DashboardSummaryCard({
  children,
  Width = "34.4rem",
}: DashboardSummaryCardProps) {
  return (
    <div
      className={`bg-white rounded-[1.2rem] px-[1.5rem] py-[1.1rem]  text-darkGray w-[${Width}]`}
    >
      {children}
    </div>
  );
}
