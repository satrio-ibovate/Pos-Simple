"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  BarChart3, 
  Settings,
  Store,
  LogOut
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/useAppStore";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const routes = [
  { label: "Point of Sale", icon: LayoutDashboard, href: "/" },
  { label: "Inventory", icon: Package, href: "/inventory" },
  { label: "Transactions", icon: ShoppingCart, href: "/orders" },
  { label: "Analytics", icon: BarChart3, href: "/reports" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export function Sidebar() {
  const pathname = usePathname();
  const { sidebarOpen } = useAppStore();

  return (
    <aside
      className={cn(
        "bg-[#fafafa] flex flex-col transition-all duration-300 z-20 h-screen hidden md:flex shrink-0",
        sidebarOpen ? "w-[260px]" : "w-[80px]"
      )}
    >
      <div className="h-16 flex items-center justify-center shrink-0">
        <Store className="h-6 w-6 text-[#111]" />
        {sidebarOpen && (
          <span className="ml-3 font-semibold text-lg tracking-tight text-[#111] whitespace-nowrap">
            Acme POS
          </span>
        )}
      </div>

      <ScrollArea className="flex-1 py-6 px-4">
        <nav className="flex flex-col gap-1.5">
          {routes.map((route) => {
            const active = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group relative",
                  active 
                    ? "bg-[#111] text-white shadow-sm" 
                    : "text-[#888] hover:text-[#111] hover:bg-[#eaeaea]/50 font-medium"
                )}
                title={!sidebarOpen ? route.label : undefined}
              >
                <route.icon className={cn("h-[18px] w-[18px] shrink-0", active ? "text-white" : "text-[#888] group-hover:text-[#111]")} strokeWidth={active ? 2 : 1.5} />
                {sidebarOpen && (
                  <span className="text-[14px] font-medium whitespace-nowrap">
                    {route.label}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>

      <div className="p-4 border-t border-[#eaeaea]">
        <div className={cn("flex items-center gap-3", sidebarOpen ? "justify-start" : "justify-center")}>
          <Avatar className="h-9 w-9 border border-[#eaeaea]">
            <AvatarImage src="https://i.pravatar.cc/150?u=a042581f4e29026704f" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          {sidebarOpen && (
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-[#111]">Jane Doe</span>
              <span className="text-xs text-[#888]">Cashier</span>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
