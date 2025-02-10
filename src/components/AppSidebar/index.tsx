import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  return (
    <div>
      <Sidebar>
        <SidebarContent>
          <SidebarGroup title="Dashboard" />
          <SidebarGroup title="Profile" />
          <SidebarGroup title="Settings" />
        </SidebarContent>
        <SidebarFooter>
          <p className="font-bold">Logout</p>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
}
