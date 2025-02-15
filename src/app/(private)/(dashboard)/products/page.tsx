import {
  EngagementStatsCard,
  EngagementStatsCardContent,
  EngagementStatsCardHeader,
  EngagementStatsCardIcon,
  EngagementStatsCardItem,
} from "@/components/EngagementStatsCard/";

import { Button } from "@/components/ui/button";
import {
  ChartNoAxesCombined,
  NotebookPen,
  Plus,
  ShoppingBag,
  StickyNote,
} from "lucide-react";

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
              <EngagementStatsCardIcon bg="white" icon={ShoppingBag} />
            </div>
          </EngagementStatsCardHeader>
          <EngagementStatsCardContent>
            <EngagementStatsCardItem
              title={"All in products"}
              value={"1,200"}
              percentage={15.8}
            />
            <EngagementStatsCardItem
              title={"Actives"}
              value={"50"}
              percentage={15.8}
            />
          </EngagementStatsCardContent>
        </EngagementStatsCard>

        <EngagementStatsCard>
          <EngagementStatsCardHeader>
            <div className="flex items-center gap-[1rem]">
              <EngagementStatsCardIcon bg="white" icon={NotebookPen} />
            </div>
          </EngagementStatsCardHeader>
          <EngagementStatsCardContent>
            <EngagementStatsCardItem
              title={"School supplies"}
              value={"23"}
              percentage={89}
            />
          </EngagementStatsCardContent>
        </EngagementStatsCard>

        <EngagementStatsCard>
          <EngagementStatsCardHeader>
            <div className="flex items-center gap-[1rem]">
              <EngagementStatsCardIcon bg="white" icon={StickyNote} />
            </div>
          </EngagementStatsCardHeader>
          <EngagementStatsCardContent>
            <EngagementStatsCardItem
              title={"Proof leaves"}
              value={"23"}
              percentage={68}
            />
          </EngagementStatsCardContent>
        </EngagementStatsCard>

        <EngagementStatsCard>
          <EngagementStatsCardHeader>
            <div className="flex items-center gap-[1rem]">
              <EngagementStatsCardIcon bg="white" icon={ChartNoAxesCombined} />
            </div>
          </EngagementStatsCardHeader>
          <EngagementStatsCardContent>
            <EngagementStatsCardItem
              title={"Exercise sheet"}
              value={"200"}
              percentage={15.8}
            />
          </EngagementStatsCardContent>
        </EngagementStatsCard>
      </div>
      <div>{/* <InChargeTable></InChargeTable> */}</div>
    </div>
  );
}
