
import { NavLink, useLocation } from "react-router-dom";
import { Camera, LayoutDashboard, Bell, Settings, HelpCircle, Shield, ChevronRight } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "Dashboard", url: "/", icon: LayoutDashboard, badge: null },
  { title: "Cameras", url: "/cameras", icon: Camera, badge: "4" },
  { title: "Events", url: "/events", icon: Shield, badge: "12" },
  { title: "Alerts", url: "/alerts", icon: Bell, badge: "3" },
  { title: "Settings", url: "/settings", icon: Settings, badge: null },
  { title: "Help", url: "/help", icon: HelpCircle, badge: null },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <Sidebar className="border-r-0 bg-white shadow-xl" collapsible="icon">
      <SidebarContent className="bg-gradient-to-b from-slate-50 to-white">
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">
            {!isCollapsed && "Navigation"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {items.map((item) => {
                const isActive = currentPath === item.url;
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild className="h-12">
                      <NavLink
                        to={item.url}
                        end
                        className={`
                          group flex items-center gap-3 px-4 py-3 rounded-xl mx-2 transition-all duration-200
                          ${isActive 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25' 
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                          }
                        `}
                      >
                        <item.icon className={`h-5 w-5 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                        {!isCollapsed && (
                          <>
                            <span className="font-medium flex-1">{item.title}</span>
                            <div className="flex items-center gap-2">
                              {item.badge && (
                                <span className={`
                                  px-2 py-0.5 rounded-full text-xs font-medium
                                  ${isActive 
                                    ? 'bg-white/20 text-white' 
                                    : 'bg-slate-200 text-slate-600'
                                  }
                                `}>
                                  {item.badge}
                                </span>
                              )}
                              {isActive && (
                                <ChevronRight className="h-4 w-4 text-white/70" />
                              )}
                            </div>
                          </>
                        )}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
