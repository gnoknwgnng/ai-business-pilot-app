
import { Home, FileText, BarChart3, Clock, Mail } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const sidebarItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: Home,
    description: "Main dashboard overview"
  },
  {
    title: "Purchase Orders",
    url: "/purchase-order-upload",
    icon: FileText,
    description: "Manage purchase orders"
  },
  {
    title: "Spend Analysis",
    url: "/spend-analysis-upload", 
    icon: BarChart3,
    description: "Analyze spending patterns"
  },
  {
    title: "Lead Time Tracking",
    url: "/lead-time-upload",
    icon: Clock,
    description: "Track delivery times"
  },
  {
    title: "Email Automation",
    url: "/email-automation",
    icon: Mail,
    description: "Automated email management"
  },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <Sidebar className={`${collapsed ? "w-16" : "w-64"} bg-dark-surface border-r border-gray-800`} collapsible>
      <SidebarContent className="bg-dark-surface">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <SidebarMenuButton asChild>
                        <NavLink 
                          to={item.url} 
                          end={item.url === "/"}
                          className={({ isActive: navIsActive }) => 
                            `flex items-center gap-3 px-3 py-3 rounded-lg transition-colors duration-200 ${
                              navIsActive || isActive(item.url)
                                ? "bg-soft-blue text-white" 
                                : "text-gray-300 hover:bg-dark-card hover:text-white"
                            }`
                          }
                        >
                          <item.icon className="h-5 w-5 flex-shrink-0" />
                          {!collapsed && <span className="font-medium">{item.title}</span>}
                        </NavLink>
                      </SidebarMenuButton>
                    </TooltipTrigger>
                    {collapsed && (
                      <TooltipContent side="right" className="bg-dark-card border-gray-700">
                        <p className="font-medium">{item.title}</p>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </TooltipContent>
                    )}
                  </Tooltip>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
