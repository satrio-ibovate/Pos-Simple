"use client";

import { Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <header className="h-[72px] bg-white border-b border-[#eaeaea] flex items-center justify-between px-8 sticky top-0 z-10 shrink-0">
      
      <div className="flex flex-col">
        <h2 className="text-[16px] font-semibold text-[#111]">Dashboard</h2>
        <span className="text-[12px] text-[#888]">{currentDate}</span>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative w-[300px] hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#888]" />
          <Input
            type="search"
            placeholder="Search items, orders..."
            className="w-full pl-9 h-9 bg-[#fafafa] border border-[#eaeaea] rounded-md focus-visible:ring-1 focus-visible:ring-[#111] focus-visible:border-[#111] text-sm shadow-none transition-all placeholder:text-[#888]"
          />
        </div>

        <div className="flex items-center gap-2 border-l border-[#eaeaea] pl-6">
          <Button variant="ghost" size="icon" className="text-[#888] hover:text-[#111] rounded-md h-9 w-9">
            <Bell className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
