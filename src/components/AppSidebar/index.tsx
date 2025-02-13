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
          <div className="w-full h-[6rem] overflow-hidden relative">
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
                      <SidebarMenuItem className="flex w-[5.6rem] items-center h-[5.6rem] justify-center p-4 rounded-[1.2rem] hover:text-highlighted hover:bg-white transition-colors">
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
                      <SidebarMenuItem className="flex w-[5.6rem] items-center h-[5.6rem] justify-center p-4 rounded-[1.2rem] hover:text-highlighted hover:bg-white transition-colors">
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
                      <SidebarMenuItem className="flex w-[5.6rem] items-center h-[5.6rem] justify-center p-4 rounded-[1.2rem] hover:text-highlighted hover:bg-white transition-colors">
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
                      <SidebarMenuItem className="flex w-[5.6rem] items-center h-[5.6rem] justify-center p-4 rounded-[1.2rem] hover:text-highlighted hover:bg-white transition-colors">
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
                      <SidebarMenuItem className="flex w-[5.6rem] items-center h-[5.6rem] justify-center p-4 rounded-[1.2rem] hover:text-highlighted hover:bg-white transition-colors">
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
                <SidebarMenuItem className="flex w-[5.6rem] items-center h-[5.6rem] justify-center p-4 rounded-[1.2rem] hover:text-highlighted hover:bg-white transition-colors">
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
