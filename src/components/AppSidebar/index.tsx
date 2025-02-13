"use client";
import { ReactSVG } from "react-svg";
import HomeIcon from "./icons/homeIcon.svg";
import LogOutIcon from "./icons/logoutIcon.svg";

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
import Link from "next/link";

const sidebarItems = [
  { title: "Home", url: "#", icon: HomeIcon },
  { title: "Dashboard", url: "#", icon: HomeIcon },
  { title: "Settings", url: "#", icon: HomeIcon },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="p-[1.6rem]">
            <SidebarMenu>
              {sidebarItems.map((item, index) => (
                <Link key={item.title + index} href={item.url}>
                  <SidebarMenuItem className="group m-auto flex p-[1.6rem] rounded-[1.2rem] hover:bg-white hover:text-highlighted">
                    <div className="w-5 h-5 text-gray-500 group-hover:text-highlighted">
                      <ReactSVG src={item.icon} style={{ fill: "red" }} />
                    </div>
                  </SidebarMenuItem>
                </Link>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Link
          className="block items-center p-[1.5rem] rounded-[1.2rem] hover:bg-white hover:text-highlighted"
          href="#"
        >
          <div className="w-4 h-4 text-gray-500 group-hover:text-highlighted">
            <ReactSVG src={LogOutIcon} style={{ fill: "currentColor" }} />
          </div>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
