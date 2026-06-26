"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShoppingCart, Users, TrendingUp } from "lucide-react";

export default function ReportsPage() {
  const stats = [
    {
      title: "Total Revenue",
      value: "Rp 4.520.000",
      icon: DollarSign,
      trend: "+12.5% from last month",
      trendColor: "text-emerald-600"
    },
    {
      title: "Total Orders",
      value: "142",
      icon: ShoppingCart,
      trend: "+5.2% from last month",
      trendColor: "text-emerald-600"
    },
    {
      title: "New Customers",
      value: "28",
      icon: Users,
      trend: "-2.1% from last month",
      trendColor: "text-amber-600"
    },
    {
      title: "Avg. Order Value",
      value: "Rp 31.830",
      icon: TrendingUp,
      trend: "+8.4% from last month",
      trendColor: "text-emerald-600"
    }
  ];

  return (
    <div className="space-y-8 max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#111]">Analytics</h1>
          <p className="text-[#888] mt-1 text-sm">Overview of your business performance.</p>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Card key={i} className="border-[#eaeaea] shadow-sm hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-[13px] font-medium text-[#888]">
                {stat.title}
              </CardTitle>
              <div className="h-8 w-8 rounded-md bg-[#fafafa] border border-[#eaeaea] flex items-center justify-center text-[#111]">
                <stat.icon className="h-4 w-4" strokeWidth={1.5} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-[#111]">{stat.value}</div>
              <p className={`text-xs mt-2 font-medium ${stat.trendColor}`}>
                {stat.trend}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 border-[#eaeaea] shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-[15px] font-medium text-[#111]">Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-6">
            <div className="h-[300px] w-full bg-[#fafafa] rounded-lg flex items-center justify-center text-[#888] border border-dashed border-[#eaeaea] text-sm">
              Chart Simulation Area
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3 border-[#eaeaea] shadow-sm bg-white">
          <CardHeader>
            <CardTitle className="text-[15px] font-medium text-[#111]">Top Selling Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {['Classic Burger', 'French Fries', 'Fried Chicken'].map((item, i) => (
                <div key={i} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="h-8 w-8 rounded-md bg-[#fafafa] border border-[#eaeaea] flex items-center justify-center text-[#111] font-medium text-xs">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-medium text-[14px] text-[#111]">{item}</p>
                      <p className="text-[12px] text-[#888]">Food Category</p>
                    </div>
                  </div>
                  <div className="font-medium text-[14px] text-[#111] bg-[#fafafa] px-2 py-1 rounded-md border border-transparent group-hover:border-[#eaeaea] transition-colors">
                    {30 + (i * 12)} sales
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
