import type { ElementType } from "react";

interface EngagementStatsCardIconProps {
  icon: ElementType;
  bg?: string;
}

export function EngagementStatsCardIcon({
  icon: Icon,
  bg = "white/10",
}: EngagementStatsCardIconProps) {
  return (
    <div
      className={`flex h-[3.6rem] w-[3.6rem] items-center justify-center rounded-[1.2rem] bg-${bg}`}
    >
      <Icon
        size={20}
        className={`${!bg ? "text-white" : "text-highlighted"}`}
      ></Icon>
    </div>
  );
}

interface EngagementStatsCardHeaderProps {
  children: React.ReactNode;
}

export function EngagementStatsCardHeader({
  children,
}: EngagementStatsCardHeaderProps) {
  return <div className="flex items-center justify-between">{children}</div>;
}

interface EngagementStatsCardContentProps {
  children: React.ReactNode;
}

export function EngagementStatsCardContent({
  children,
}: EngagementStatsCardContentProps) {
  return <div className="mt-[3.1rem] flex justify-between">{children}</div>;
}

interface EngagementStatsCardItemProps {
  title: string;
  value: string | number;
  percentage?: number;
}

export function EngagementStatsCardItem({
  title,
  value,
  percentage,
}: EngagementStatsCardItemProps) {
  const isNegative = percentage !== undefined && percentage < 0;

  return (
    <div className="w-[45%] text-white">
      <p className="mb-[0.8rem] text-[1.4rem]">{title}</p>
      <h2 className="text-[2rem] font-medium">
        {value} <span> </span>
        {percentage !== undefined && (
          <span
            className={`text-[1.2rem] ${
              isNegative ? "text-lightGray" : "text-lightGray"
            }`}
          >
            {percentage.toFixed(2)}%
          </span>
        )}
      </h2>
    </div>
  );
}

interface EngagementStatsCardProps {
  children: React.ReactNode;
}

export function EngagementStatsCard({ children }: EngagementStatsCardProps) {
  return (
    <div className="w-[34.4rem] rounded-[1.2rem] bg-highlighted px-[1.5rem] py-[1.1rem] text-darkGray">
      {children}
    </div>
  );
}
