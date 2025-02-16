import {
  DashboardSummaryCard,
  DashboardSummaryCardContent,
  DashboardSummaryCardHeader,
  DashboardSummaryCardIcon,
  DashboardSummaryCardItem,
} from "@/components/DashboardSummaryCard";
import { SelectFilterSummaryCard } from "@/components/DashboardSummaryCard/components/SelectFilterSummaryCard";
import {
  Book,
  ChevronDown,
  CreditCard,
  NotebookText,
  ShoppingBasket,
  UserRound,
  UsersRound,
} from "lucide-react";
import React from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { InChargeTable } from "../../components/InChangeTable/InChangeTable";

interface RequestItemProps {}

const InChargeDetails: React.FC = () => {
  return (
    <div className="mt-[2rem] flex flex-col gap-[2.5rem] px-[2.5rem]">
      <div className="flex items-end justify-between">
        <h2 className="text-[1.6rem] font-medium">In Charge Details</h2>
        <div className="flex gap-[1rem]">
          <Button className="flex rounded-[0.8rem]">
            <span>Edit Details</span>

            <ChevronDown></ChevronDown>
          </Button>
          <Button className="rounded-[0.8rem]" variant={"destructive"}>
            <span>Disable/Block</span>
            <ChevronDown></ChevronDown>
          </Button>
        </div>
      </div>
      <div className="flex flex-auto gap-[2.5rem]">
        <div className="flex-1">
          <DashboardSummaryCard Width="auto">
            <DashboardSummaryCardHeader>
              <div className="flex items-center gap-[1rem]">
                <DashboardSummaryCardIcon icon={UsersRound} />
                <div>
                  <h1 className="text-[1.4rem] font-medium text-Gray">
                    Antonio Gabriel
                  </h1>
                  <p className="text-[1.2rem]">Last request 12 Sep 2025</p>
                </div>
              </div>
              <Badge className="py-[0.6rem]">Active</Badge>
            </DashboardSummaryCardHeader>
            <DashboardSummaryCardContent>
              <DashboardSummaryCardItem
                text_is_med
                title={"Telephone"}
                value={"+24494727364"}
              />
            </DashboardSummaryCardContent>
          </DashboardSummaryCard>
        </div>
        <div className="flex-1">
          <DashboardSummaryCard Width="auto">
            <DashboardSummaryCardHeader>
              <div className="flex items-center gap-[1rem]">
                <DashboardSummaryCardIcon icon={UserRound} />
              </div>
            </DashboardSummaryCardHeader>
            <DashboardSummaryCardContent>
              <DashboardSummaryCardItem
                text_is_med
                title={"Address"}
                value={"London, USA"}
              />

              <DashboardSummaryCardItem
                text_is_med
                title={"Associated Children"}
                value={"20"}
              />
            </DashboardSummaryCardContent>
          </DashboardSummaryCard>
        </div>
        <div className="flex-1">
          <DashboardSummaryCard Width="auto">
            <DashboardSummaryCardHeader>
              <div className="flex items-center gap-[1rem]">
                <DashboardSummaryCardIcon icon={CreditCard} />
              </div>
              <SelectFilterSummaryCard />
            </DashboardSummaryCardHeader>
            <DashboardSummaryCardContent>
              <DashboardSummaryCardItem
                title={"Total Payments"}
                value={"KZ 15,20.00"}
                percentage={85.8}
              />
            </DashboardSummaryCardContent>
          </DashboardSummaryCard>
        </div>
      </div>
      <div className="flex flex-auto gap-[2.5rem]">
        <div className="flex-1">
          <DashboardSummaryCard Width="auto">
            <DashboardSummaryCardHeader>
              <div className="flex items-center gap-[1rem]">
                <DashboardSummaryCardIcon icon={NotebookText} />
              </div>
              <SelectFilterSummaryCard />
            </DashboardSummaryCardHeader>
            <DashboardSummaryCardContent>
              <DashboardSummaryCardItem title={"Request"} value={"20"} />

              <DashboardSummaryCardItem title={"Pending"} value={"108"} />

              <DashboardSummaryCardItem title={"Completed"} value={"92"} />
            </DashboardSummaryCardContent>
          </DashboardSummaryCard>
        </div>
        <div className="flex-1">
          <DashboardSummaryCard Width="auto">
            <DashboardSummaryCardHeader>
              <div className="flex items-center gap-[1rem]">
                <DashboardSummaryCardIcon icon={Book} />
              </div>
              <SelectFilterSummaryCard />
            </DashboardSummaryCardHeader>
            <DashboardSummaryCardContent>
              <DashboardSummaryCardItem title={"Canceled"} value={"20"} />

              <DashboardSummaryCardItem title={"Returned"} value={"108"} />

              <DashboardSummaryCardItem title={"Changed"} value={"92"} />
            </DashboardSummaryCardContent>
          </DashboardSummaryCard>
        </div>
        <div className="flex-1">
          <DashboardSummaryCard Width="auto">
            <DashboardSummaryCardHeader>
              <div className="flex items-center gap-[1rem]">
                <DashboardSummaryCardIcon icon={ShoppingBasket} />
              </div>
              <SelectFilterSummaryCard />
            </DashboardSummaryCardHeader>
            <DashboardSummaryCardContent>
              <DashboardSummaryCardItem title={"Abandoned cart"} value={"20"} />
            </DashboardSummaryCardContent>
          </DashboardSummaryCard>
        </div>
      </div>
      <div>
        <InChargeTable></InChargeTable>
      </div>
    </div>
  );
};

export default InChargeDetails;
