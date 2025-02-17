import {
  EngagementStatsCard,
  EngagementStatsCardContent,
  EngagementStatsCardHeader,
  EngagementStatsCardIcon,
  EngagementStatsCardItem,
} from "@/components/EngagementStatsCard/";

import {
  DashboardSummaryCard,
  DashboardSummaryCardContent,
  DashboardSummaryCardHeader,
  DashboardSummaryCardIcon,
  DashboardSummaryCardItem,
} from "@/components/DashboardSummaryCard";

import { Button } from "@/components/ui/button";
import { ChartNoAxesCombined, GraduationCap, Plus } from "lucide-react";
import Link from "next/link";
import { TeachersTable } from "./components/TeachersTable/teachersTable";

export default function Teacher() {
  return (
    <div className="mt-[2rem] flex flex-col gap-[2.5rem] px-[2.5rem]">
      <div className="flex items-end justify-between">
        <h2 className="text-[1.6rem] font-medium">Teacher</h2>

        <Link href={"/teachers/add-teacher"}>
          <Button className="flex rounded-[0.8rem]">
            <Plus></Plus>
            <span>Add teacher</span>
          </Button>
        </Link>
      </div>
      <div className="flex flex-wrap gap-[2.5rem]">
        <div className="flex-1">
          <EngagementStatsCard Width="auto">
            <EngagementStatsCardHeader>
              <div className="flex items-center gap-[1rem]">
                <EngagementStatsCardIcon bg="white" icon={GraduationCap} />
              </div>
            </EngagementStatsCardHeader>
            <EngagementStatsCardContent>
              <EngagementStatsCardItem
                title={"Total Teachers"}
                value={"20"}
                percentage={15.8}
              />
              <EngagementStatsCardItem
                title={"Actives"}
                value={"50"}
                percentage={15.8}
              />
            </EngagementStatsCardContent>
          </EngagementStatsCard>
        </div>
        <div className="flex-1">
          <DashboardSummaryCard Width="auto">
            <DashboardSummaryCardHeader>
              <div className="flex items-center gap-[1rem]">
                <DashboardSummaryCardIcon icon={ChartNoAxesCombined} />
              </div>
            </DashboardSummaryCardHeader>
            <DashboardSummaryCardContent>
              <DashboardSummaryCardItem
                title={"Total payments"}
                value={"200"}
                percentage={15.8}
              />
              <DashboardSummaryCardItem
                title={"Requests"}
                value={"340"}
                percentage={15.8}
              />
            </DashboardSummaryCardContent>
          </DashboardSummaryCard>
        </div>
      </div>
      <div>
        <TeachersTable></TeachersTable>
      </div>
    </div>
  );
}
