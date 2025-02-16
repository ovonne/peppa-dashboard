import {
  EngagementStatsCard,
  EngagementStatsCardContent,
  EngagementStatsCardHeader,
  EngagementStatsCardItem,
} from "@/components/EngagementStatsCard/";

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
          <EngagementStatsCard Width="auto">
            <EngagementStatsCardHeader>
              <div className="flex h-[3.5rem] items-center gap-[1rem]"></div>
            </EngagementStatsCardHeader>
            <EngagementStatsCardContent>
              <EngagementStatsCardItem
                title={"All in charge"}
                value={"1,200"}
                percentage={15.8}
              />

              <EngagementStatsCardItem
                title={"Active"}
                value={"1,108"}
                percentage={85}
              />

              <EngagementStatsCardItem
                title={"Inactive"}
                value={"92"}
                percentage={-75}
              />
            </EngagementStatsCardContent>
          </EngagementStatsCard>
        </div>
      </div>
      <div>
        <UsersTable></UsersTable>
      </div>
    </div>
  );
}
