import {
  DashboardSummaryCard,
  DashboardSummaryCardContent,
  DashboardSummaryCardHeader,
  DashboardSummaryCardIcon,
  DashboardSummaryCardItem,
} from "@/components/DashboardSummaryCard";
import { SelectFilterSummaryCard } from "@/components/DashboardSummaryCard/components/SelectFilterSummaryCard";
import { UserPlus, UsersRound } from "lucide-react";
import { AddInChargeModal } from "./components/AddInChargeModal";
import { InChargeTable } from "./components/InChangeTable/InChangeTable";

export default function InCharge() {
  return (
    <div className="mt-[2rem] flex flex-col gap-[2.5rem] px-[2.5rem]">
      <div className="flex items-end justify-between">
        <h2 className="text-[1.6rem] font-medium">In Charge</h2>
        <AddInChargeModal></AddInChargeModal>
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
        <div className="flex-1">
          <DashboardSummaryCard Width="auto">
            <DashboardSummaryCardHeader>
              <div className="flex items-center gap-[1rem]">
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
