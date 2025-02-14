"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Home, LogOut, Package, Settings, Shield, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ICON_SIZE = 18;
const ICON_STROKE_WIDTH = 2.5;

export function AppSidebar() {
  return (
    <TooltipProvider>
      <Sidebar className="text-white">
        <SidebarHeader className="p-[1rem] text-center">
          <div className="relative h-[6rem] w-full overflow-hidden">
            <Image className="object-cover" alt="logo" fill src={"/logo.svg"} />
          </div>
        </SidebarHeader>
        <SidebarContent className="mt-[1rem]">
          <SidebarGroup>
            <SidebarGroupContent className="p-[1rem]">
              <SidebarMenu>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#">
                      <SidebarMenuItem className="flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-[1.2rem] p-4 transition-colors hover:bg-white hover:text-highlighted">
                        <Home
                          size={ICON_SIZE}
                          strokeWidth={ICON_STROKE_WIDTH}
                        />
                      </SidebarMenuItem>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Home</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#">
                      <SidebarMenuItem className="flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-[1.2rem] p-4 transition-colors hover:bg-white hover:text-highlighted">
                        <Shield
                          size={ICON_SIZE}
                          strokeWidth={ICON_STROKE_WIDTH}
                        />
                      </SidebarMenuItem>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Security</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#">
                      <SidebarMenuItem className="flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-[1.2rem] p-4 transition-colors hover:bg-white hover:text-highlighted">
                        <Package
                          size={ICON_SIZE}
                          strokeWidth={ICON_STROKE_WIDTH}
                        />
                      </SidebarMenuItem>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Products</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#">
                      <SidebarMenuItem className="flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-[1.2rem] p-4 transition-colors hover:bg-white hover:text-highlighted">
                        <Users
                          size={ICON_SIZE}
                          strokeWidth={ICON_STROKE_WIDTH}
                        />
                      </SidebarMenuItem>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Users</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link href="#">
                      <SidebarMenuItem className="flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-[1.2rem] p-4 transition-colors hover:bg-white hover:text-highlighted">
                        <Settings
                          size={ICON_SIZE}
                          strokeWidth={ICON_STROKE_WIDTH}
                        />
                      </SidebarMenuItem>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right">Settings</TooltipContent>
                </Tooltip>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="p-[2rem]">
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href="#">
                <SidebarMenuItem className="flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-[1.2rem] p-4 transition-colors hover:bg-white hover:text-highlighted">
                  <LogOut size={ICON_SIZE} strokeWidth={ICON_STROKE_WIDTH} />
                </SidebarMenuItem>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Logout</TooltipContent>
          </Tooltip>
        </SidebarFooter>
      </Sidebar>
    </TooltipProvider>
  );
}
