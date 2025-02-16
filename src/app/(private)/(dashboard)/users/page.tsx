import {
  DashboardSummaryCard,
  DashboardSummaryCardContent,
  DashboardSummaryCardHeader,
  DashboardSummaryCardIcon,
  DashboardSummaryCardItem,
} from "@/components/DashboardSummaryCard/Index";
import { SelectFilterSummaryCard } from "@/components/DashboardSummaryCard/components/SelectFilterSummaryCard";
import { UsersRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { UsersTable } from "./components/UsersTable";

export default function InCharge() {
  return (
    <div className="mt-[2rem] flex flex-col gap-[2.5rem] px-[2.5rem]">
      <div className="flex items-end justify-between">
        <h2 className="text-[1.6rem] font-medium">Users</h2>
        <Button className="rounded-[0.8rem]">Add User</Button>
      </div>
      <div className="flex flex-auto gap-[2.5rem]">
        <div className="flex-1">
          <DashboardSummaryCard Width="auto">
            <DashboardSummaryCardHeader>
              <div className="flex items-center gap-[1rem]">
                <DashboardSummaryCardIcon icon={UsersRound} />
              </div>
              <SelectFilterSummaryCard />
            </DashboardSummaryCardHeader>
            <DashboardSummaryCardContent>
              <DashboardSummaryCardItem
                title={"All in charge"}
                value={"1,200"}
                percentage={15.8}
              />

              <DashboardSummaryCardItem
                title={"Active"}
                value={"1,108"}
                percentage={85}
              />

              <DashboardSummaryCardItem
                title={"Inactive"}
                value={"92"}
                percentage={-75}
              />
            </DashboardSummaryCardContent>
          </DashboardSummaryCard>
        </div>
      </div>
      <div>
        <UsersTable></UsersTable>
      </div>
    </div>
  );
}
