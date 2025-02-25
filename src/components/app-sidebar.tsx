import * as React from "react";
import { SquareTerminal } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
    user: {
        name: "Produktionsleiter",
        email: "pl@test.de",
        avatar: "test",
    },
    navMain: [
        {
            title: "Application Test",
            url: "#",
            icon: SquareTerminal,
            isActive: true,
            items: [
                {
                    title: "Testpage",
                    url: "/",
                },
            ],
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarContent>
                <NavMain items={data.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={data.user} />
            </SidebarFooter>
        </Sidebar>
    );
}
