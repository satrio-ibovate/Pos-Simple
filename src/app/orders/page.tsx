"use client";

import { mockTransactions } from "@/lib/mockData";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, ReceiptText } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { toast } from "sonner";

export default function OrdersPage() {
  return (
    <div className="space-y-8 max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#111]">Transactions</h1>
          <p className="text-[#888] mt-1 text-sm">View and manage past orders.</p>
        </div>
      </div>

      <div className="bg-white border border-[#eaeaea] rounded-xl overflow-hidden shadow-sm">
        <Table>
          <TableHeader className="bg-[#fafafa]">
            <TableRow className="border-[#eaeaea] hover:bg-transparent">
              <TableHead className="font-medium text-[#888]">Order ID</TableHead>
              <TableHead className="font-medium text-[#888]">Date & Time</TableHead>
              <TableHead className="text-right font-medium text-[#888]">Items</TableHead>
              <TableHead className="text-right font-medium text-[#888]">Total Amount</TableHead>
              <TableHead className="text-center font-medium text-[#888]">Status</TableHead>
              <TableHead className="text-right font-medium text-[#888]">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockTransactions.map((trx) => (
              <TableRow key={trx.id} className="border-[#eaeaea] hover:bg-[#fafafa]/50 transition-colors">
                <TableCell className="font-medium text-[#111]">{trx.id}</TableCell>
                <TableCell className="text-[#666]">{trx.date}</TableCell>
                <TableCell className="text-right text-[#111]">{trx.items}</TableCell>
                <TableCell className="text-right font-medium text-[#111]">Rp {trx.amount.toLocaleString('id-ID')}</TableCell>
                <TableCell className="text-center">
                  <Badge 
                    variant="outline"
                    className={
                      trx.status === "Completed" ? "bg-emerald-50 border-emerald-200 text-emerald-700" : 
                      trx.status === "Pending" ? "bg-amber-50 border-amber-200 text-amber-700" : 
                      "bg-red-50 border-red-200 text-red-700"
                    }
                  >
                    {trx.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Dialog>
                    <DialogTrigger className="h-8 w-8 inline-flex items-center justify-center rounded-md transition-colors hover:bg-[#fafafa] border border-transparent hover:border-[#eaeaea] text-[#888] hover:text-[#111] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#111]">
                      <Eye className="h-4 w-4" />
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] border-[#eaeaea]">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2 text-[#111]">
                          <ReceiptText className="h-4 w-4 text-[#888]" /> Order Details {trx.id}
                        </DialogTitle>
                      </DialogHeader>
                      <div className="py-4 space-y-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-[#888]">Date</span>
                          <span className="font-medium text-[#111]">{trx.date}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-[#888]">Status</span>
                          <span className="font-medium text-[#111]">{trx.status}</span>
                        </div>
                        <div className="border-t border-[#eaeaea] pt-4 space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-[#666]">Mock Item x {trx.items}</span>
                            <span className="text-[#111]">Rp {trx.amount.toLocaleString('id-ID')}</span>
                          </div>
                        </div>
                        <div className="border-t border-[#eaeaea] pt-4 flex justify-between font-semibold text-lg">
                          <span className="text-[#111]">Total</span>
                          <span className="text-[#111]">Rp {trx.amount.toLocaleString('id-ID')}</span>
                        </div>
                      </div>
                      <div className="flex justify-end gap-2 mt-2">
                        <Button variant="outline" className="border-[#eaeaea] text-[#111] hover:bg-[#fafafa]" onClick={() => toast.success("Receipt printed!")}>Print Receipt</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
