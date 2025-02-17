import { AppHeader } from "@/components/AppHeader";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

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
