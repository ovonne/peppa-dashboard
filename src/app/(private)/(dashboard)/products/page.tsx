import {
  EngagementStatsCard,
  EngagementStatsCardContent,
  EngagementStatsCardHeader,
  EngagementStatsCardIcon,
  EngagementStatsCardItem,
} from "@/components/EngagementStatsCard/";

import { Button } from "@/components/ui/button";
import { Plus, UserPlus, UsersRound } from "lucide-react";

export default function InCharge() {
  return (
    <div className="mt-[2rem] flex flex-col gap-[2.5rem] px-[2.5rem]">
      <div className="flex items-end justify-between">
        <h2 className="text-[1.6rem] font-medium">Products</h2>

        <Button className="flex rounded-[0.8rem]">
          <Plus></Plus>
          <span>Add Product</span>
        </Button>
      </div>
      <div className="flex flex-wrap gap-[2.5rem]">
        <EngagementStatsCard>
          <EngagementStatsCardHeader>
            <div className="flex items-center gap-[1rem]">
              <EngagementStatsCardIcon icon={UsersRound} />
            </div>
          </EngagementStatsCardHeader>
          <EngagementStatsCardContent>
            <EngagementStatsCardItem
              title={"All in charge"}
              value={"1,200"}
              percentage={15.8}
            />
          </EngagementStatsCardContent>
        </EngagementStatsCard>

        <EngagementStatsCard>
          <EngagementStatsCardHeader>
            <div className="flex items-center gap-[1rem]">
              <EngagementStatsCardIcon icon={UserPlus} />
            </div>
          </EngagementStatsCardHeader>
          <EngagementStatsCardContent>
            <EngagementStatsCardItem
              title={"News in charge"}
              value={"1,200"}
              percentage={15.8}
            />
          </EngagementStatsCardContent>
        </EngagementStatsCard>

        <EngagementStatsCard>
          <EngagementStatsCardHeader>
            <div className="flex items-center gap-[1rem]">
              <EngagementStatsCardIcon icon={UsersRound} />
            </div>
          </EngagementStatsCardHeader>
          <EngagementStatsCardContent>
            <EngagementStatsCardItem
              title={"All in charge"}
              value={"1,200"}
              percentage={15.8}
            />
          </EngagementStatsCardContent>
        </EngagementStatsCard>

        <EngagementStatsCard>
          <EngagementStatsCardHeader>
            <div className="flex items-center gap-[1rem]">
              <EngagementStatsCardIcon icon={UserPlus} />
            </div>
          </EngagementStatsCardHeader>
          <EngagementStatsCardContent>
            <EngagementStatsCardItem
              title={"News in charge"}
              value={"1,200"}
              percentage={15.8}
            />
          </EngagementStatsCardContent>
        </EngagementStatsCard>
      </div>
      <div>{/* <InChargeTable></InChargeTable> */}</div>
    </div>
  );
}
