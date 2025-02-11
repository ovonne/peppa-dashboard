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
          <div>{children}</div>
        </div>
      </SidebarProvider>
    </div>
  );
}
