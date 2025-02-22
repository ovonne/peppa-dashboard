import { AppHeader } from "@/components/AppHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Peppa Dashboard",
  description:
    "this is a dashboard application for managing permissions and creating users and older thinks for the Peppa application",
};
export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <SidebarProvider>
        <AppSidebar />

        <div className="w-full bg-semiLightGray">
          <div className="pb-[10rem]">
            <AppHeader></AppHeader>
            {children}
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
}
