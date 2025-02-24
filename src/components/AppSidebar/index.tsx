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
import { LogOut } from "lucide-react";

import { authService } from "@/services/authService/authService";
import { menuItems } from "@/store/SidebarMenuItems";
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
                {menuItems.map(({ href, icon: Icon, label }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <Link href={href}>
                        <SidebarMenuItem className="flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-[1.2rem] p-4 transition-colors hover:bg-white hover:text-highlighted">
                          <Icon
                            size={ICON_SIZE}
                            strokeWidth={ICON_STROKE_WIDTH}
                          />
                        </SidebarMenuItem>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right">{label}</TooltipContent>
                  </Tooltip>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="p-[2rem]">
          <Tooltip>
            <TooltipTrigger asChild>
              <SidebarMenuItem
                onClick={() => authService.logout()}
                className="flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-[1.2rem] p-4 transition-colors hover:bg-white hover:text-highlighted"
              >
                <LogOut size={ICON_SIZE} strokeWidth={ICON_STROKE_WIDTH} />
              </SidebarMenuItem>
            </TooltipTrigger>
            <TooltipContent side="right">Logout</TooltipContent>
          </Tooltip>
        </SidebarFooter>
      </Sidebar>
    </TooltipProvider>
  );
}
