import {
  DashboardSummaryCard,
  DashboardSummaryCardContent,
  DashboardSummaryCardHeader,
  DashboardSummaryCardIcon,
  DashboardSummaryCardItem,
} from "@/components/DashboardSummaryCard/Index";
import { SelectFilterSummaryCard } from "@/components/DashboardSummaryCard/components/SelectFilterSummaryCard";
import { Button } from "@/components/ui/button";
import { Plus, UserPlus, UsersRound } from "lucide-react";
import { InChargeTable } from "./components/InChangeTable/InChangeTable";

export default function InCharge() {
  return (
    <div className="px-[2.5rem] flex flex-col gap-[2.5rem] mt-[2rem]">
      <div className="flex items-end justify-between">
        <h2 className="font-medium text-[1.6rem]">In Charge</h2>
        <Button className="flex gap-[1rem]">
          <Plus className="!size-[2rem]" />
          Add In Charge
        </Button>
      </div>
      <div className="flex flex-auto gap-[2.5rem]">
        <div className="flex-1">
          <DashboardSummaryCard Width="auto">
            <DashboardSummaryCardHeader>
              <div className="flex gap-[1rem] items-center">
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
        <div className="flex-1">
          <DashboardSummaryCard Width="auto">
            <DashboardSummaryCardHeader>
              <div className="flex gap-[1rem] items-center">
                <DashboardSummaryCardIcon icon={UserPlus} />
              </div>
              <SelectFilterSummaryCard />
            </DashboardSummaryCardHeader>
            <DashboardSummaryCardContent>
              <DashboardSummaryCardItem
                title={"News in charge"}
                value={"1,200"}
                percentage={15.8}
              />

              <DashboardSummaryCardItem title={"Shopping"} value={"108"} />

              <DashboardSummaryCardItem
                title={"Abandoned strollers"}
                value={"20"}
              />
            </DashboardSummaryCardContent>
          </DashboardSummaryCard>
        </div>
      </div>
      <div>
        <InChargeTable></InChargeTable>
      </div>
    </div>
  );
}
