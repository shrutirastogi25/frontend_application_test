import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

export default function Page() {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="flex-1 min-w-0">
                <nav id="topnav" className="w-full h-14 bg-muted"></nav>
                <div className="h-full px-10 overflow-auto">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    );
}
