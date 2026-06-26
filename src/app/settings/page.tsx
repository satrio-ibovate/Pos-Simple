"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Store, Receipt, BellRing, ShieldCheck } from "lucide-react";

export default function SettingsPage() {
  const saveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Settings saved successfully!");
  };

  return (
    <div className="space-y-8 max-w-[1000px] mx-auto">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-[#111]">Settings</h1>
        <p className="text-[#888] mt-1 text-sm">Manage your store preferences and account settings.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-12">
        {/* Settings Navigation */}
        <div className="md:col-span-3 space-y-1">
          <Button variant="secondary" className="w-full justify-start bg-[#fafafa] text-[#111] hover:bg-[#eaeaea] shadow-none border border-[#eaeaea]">
            <Store className="mr-3 h-4 w-4" strokeWidth={1.5} /> Store Details
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#888] hover:text-[#111] hover:bg-[#fafafa]">
            <Receipt className="mr-3 h-4 w-4" strokeWidth={1.5} /> Tax & Receipts
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#888] hover:text-[#111] hover:bg-[#fafafa]">
            <BellRing className="mr-3 h-4 w-4" strokeWidth={1.5} /> Notifications
          </Button>
          <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
            <ShieldCheck className="mr-3 h-4 w-4" strokeWidth={1.5} /> Security
          </Button>
        </div>

        {/* Settings Content */}
        <div className="md:col-span-9 space-y-6">
          <Card className="border-[#eaeaea] shadow-sm bg-white">
            <CardHeader className="border-b border-[#eaeaea] pb-4 mb-4">
              <CardTitle className="text-[15px] font-medium text-[#111]">Store Information</CardTitle>
              <CardDescription className="text-xs text-[#888]">Update your store&apos;s basic information.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={saveSettings} className="space-y-5">
                <div className="grid gap-2">
                  <label htmlFor="storeName" className="text-[13px] font-medium text-[#111]">Store Name</label>
                  <Input id="storeName" defaultValue="Acme POS Cafe" className="max-w-md bg-[#fafafa] border-[#eaeaea] focus-visible:ring-1 focus-visible:ring-[#111] focus-visible:border-[#111] shadow-none" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-[13px] font-medium text-[#111]">Contact Email</label>
                  <Input id="email" type="email" defaultValue="hello@acmepos.com" className="max-w-md bg-[#fafafa] border-[#eaeaea] focus-visible:ring-1 focus-visible:ring-[#111] focus-visible:border-[#111] shadow-none" />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="address" className="text-[13px] font-medium text-[#111]">Store Address</label>
                  <Input id="address" defaultValue="Jl. Sudirman No. 123, Jakarta" className="max-w-md bg-[#fafafa] border-[#eaeaea] focus-visible:ring-1 focus-visible:ring-[#111] focus-visible:border-[#111] shadow-none" />
                </div>
                <div className="pt-4">
                  <Button type="submit" className="bg-[#111] hover:bg-black text-white px-6 font-medium shadow-sm">
                    Save Changes
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
