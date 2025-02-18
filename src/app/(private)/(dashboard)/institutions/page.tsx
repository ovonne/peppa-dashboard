import {
  EngagementStatsCard,
  EngagementStatsCardContent,
  EngagementStatsCardHeader,
  EngagementStatsCardIcon,
  EngagementStatsCardItem,
} from "@/components/EngagementStatsCard/";
import { Plus, School } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { InstitutionsTable } from "./components/InstitutionsTable";

export default function Institutions() {
  return (
    <div className="mt-[2rem] flex flex-col gap-[2.5rem] px-[2.5rem]">
      <div className="flex items-end justify-between">
        <h2 className="text-[1.6rem] font-medium">Tenants</h2>
        <Link href={"/institutions/add-institution"}>
          <Button className="rounded-[0.8rem]">
            <Plus className="!size-[2rem]"></Plus>
            Add Tenants
          </Button>
        </Link>
      </div>
      <div className="flex flex-auto gap-[2.5rem]">
        <div className="flex-1">
          <EngagementStatsCard Width="auto">
            <EngagementStatsCardHeader>
              <div className="flex h-[3.5rem] items-center gap-[1rem]">
                <EngagementStatsCardIcon
                  bg="white"
                  icon={School}
                ></EngagementStatsCardIcon>
              </div>
            </EngagementStatsCardHeader>
            <EngagementStatsCardContent>
              <EngagementStatsCardItem
                title={"All in Tenants"}
                value={"1,200"}
                percentage={15.8}
              />

              <EngagementStatsCardItem
                title={"Active"}
                value={"1,108"}
                percentage={85}
              />

              <EngagementStatsCardItem
                title={"Pending"}
                value={"92"}
                percentage={-75}
              />
            </EngagementStatsCardContent>
          </EngagementStatsCard>
        </div>
      </div>
      <div>
        <InstitutionsTable></InstitutionsTable>
      </div>
    </div>
  );
}
