import type { ElementType } from "react";

interface EngagementStatsCardIconProps {
  icon: ElementType;
}

export function EngagementStatsCardIcon({
  icon: Icon,
}: EngagementStatsCardIconProps) {
  return (
    <div className="bg-white/10 h-[3.6rem] w-[3.6rem] flex justify-center items-center rounded-[1.2rem]">
      <Icon size={20} className="text-white"></Icon>
    </div>
  );
}

interface EngagementStatsCardHeaderProps {
  children: React.ReactNode;
}

export function EngagementStatsCardHeader({
  children,
}: EngagementStatsCardHeaderProps) {
  return <div className="flex justify-between items-center">{children}</div>;
}

interface EngagementStatsCardContentProps {
  children: React.ReactNode;
}

export function EngagementStatsCardContent({
  children,
}: EngagementStatsCardContentProps) {
  return <div className="flex justify-between mt-[3.1rem]">{children}</div>;
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
      <p className="text-[1.4rem]  mb-[0.8rem]">{title}</p>
      <h2 className="text-[2rem] font-medium ">
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
    <div className="bg-highlighted rounded-[1.2rem] px-[1.5rem] py-[1.1rem] w-[34.4rem] text-darkGray">
      {children}
    </div>
  );
}
