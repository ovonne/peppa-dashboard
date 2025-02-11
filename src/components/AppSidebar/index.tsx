import Image from "next/image";
import HomeIcon from "./icons/homeIcon.svg";
import LogoutIcon from "./icons/logoutIcon.svg";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

const sidebarItems = [{ title: "Home", url: "#", icon: HomeIcon }];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent className="p-[1.6rem]">
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <Image
                        alt={item.title}
                        width={20}
                        height={20}
                        src={item.icon}
                      />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Link className="block p-[2rem]" href="#">
          <Image src={LogoutIcon} alt={LogoutIcon} width={0} height={0}></Image>
        </Link>
      </SidebarFooter>
    </Sidebar>
  );
}
