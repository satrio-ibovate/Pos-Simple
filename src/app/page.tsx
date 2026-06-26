"use client";

import { useState } from "react";
import { mockProducts, mockCategories } from "@/lib/mockData";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Plus, Minus, ShoppingBag, CreditCard } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export default function POSPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { items, addItem, updateQuantity, clearCart, total, subtotal, tax } = useCartStore();

  const filteredProducts = activeCategory === "All" 
    ? mockProducts 
    : mockProducts.filter(p => p.category === activeCategory);

  const handleCheckout = () => {
    if (items.length === 0) return;
    toast.success("Transaction Complete", {
      description: `Payment of Rp ${total().toLocaleString('id-ID')} processed successfully.`,
    });
    clearCart();
  };

  return (
    <div className="flex h-full gap-8 max-w-[1600px] mx-auto">
      {/* Main Products Area */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Categories (Minimalist Pills) */}
        <div className="flex gap-2 overflow-x-auto pb-6 shrink-0 hide-scrollbar">
          {mockCategories.map((cat) => (
            <button
              key={cat}
              className={cn(
                "px-5 py-2 rounded-full text-sm font-medium transition-all border",
                activeCategory === cat 
                  ? "bg-[#111] text-white border-[#111]" 
                  : "bg-white text-[#888] border-[#eaeaea] hover:border-[#111] hover:text-[#111]"
              )}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <ScrollArea className="flex-1 -mx-2 px-2">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 pb-12">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="group cursor-pointer rounded-xl border border-[#eaeaea] bg-white p-3 hover:border-[#111] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] transition-all flex flex-col"
                onClick={() => {
                  addItem(product);
                  toast("Added to Order", { description: product.name });
                }}
              >
                <div className="aspect-square rounded-lg bg-[#fafafa] flex items-center justify-center overflow-hidden mb-4 group-hover:scale-[1.02] transition-transform relative">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                      <Plus className="h-4 w-4 text-[#111]" />
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <h3 className="font-medium text-[14px] text-[#111] leading-tight mb-1 truncate">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[15px] text-[#111]">Rp {product.price.toLocaleString('id-ID')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Elegant Cart Sidebar */}
      <div className="w-[380px] bg-white rounded-2xl border border-[#eaeaea] flex flex-col h-[calc(100vh-10rem)] shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hidden lg:flex">
        <div className="p-6 border-b border-[#eaeaea] flex items-center justify-between bg-[#fafafa]/50 rounded-t-2xl">
          <h2 className="font-semibold text-lg text-[#111]">Current Order</h2>
          <span className="text-xs font-medium bg-[#111] text-white px-2 py-1 rounded-full">
            {items.reduce((acc, i) => acc + i.quantity, 0)} Items
          </span>
        </div>

        <ScrollArea className="flex-1 p-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-[#888] space-y-4 py-12">
              <div className="h-16 w-16 rounded-full bg-[#fafafa] border border-[#eaeaea] flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 opacity-40" />
              </div>
              <p className="text-sm">Select items to start order</p>
            </div>
          ) : (
            <div className="space-y-5">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="h-14 w-14 bg-[#fafafa] border border-[#eaeaea] rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0 py-1">
                    <p className="font-medium text-[14px] text-[#111] truncate">{item.name}</p>
                    <p className="text-[13px] text-[#888] mb-2">Rp {item.price.toLocaleString('id-ID')}</p>
                    <div className="flex items-center gap-3">
                      <button 
                        className="h-6 w-6 rounded-full border border-[#eaeaea] flex items-center justify-center hover:border-[#111] transition-colors text-[#888] hover:text-[#111]"
                        onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, item.quantity - 1); }}
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-[13px] font-medium w-4 text-center">{item.quantity}</span>
                      <button 
                        className="h-6 w-6 rounded-full border border-[#eaeaea] flex items-center justify-center hover:border-[#111] transition-colors text-[#888] hover:text-[#111]"
                        onClick={(e) => { e.stopPropagation(); updateQuantity(item.id, item.quantity + 1); }}
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right py-1">
                    <p className="font-semibold text-[14px] text-[#111]">
                      Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>

        <div className="p-6 bg-[#fafafa]/50 border-t border-[#eaeaea] rounded-b-2xl">
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-[14px] text-[#888]">
              <span>Subtotal</span>
              <span className="text-[#111] font-medium">Rp {subtotal().toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between text-[14px] text-[#888]">
              <span>Tax (11%)</span>
              <span className="text-[#111] font-medium">Rp {tax().toLocaleString('id-ID')}</span>
            </div>
            <div className="flex justify-between items-center border-t border-[#eaeaea] pt-4 mt-1">
              <span className="font-medium text-[#111]">Total</span>
              <span className="text-2xl font-bold text-[#111]">Rp {total().toLocaleString('id-ID')}</span>
            </div>
          </div>
          
          <Button 
            className="w-full h-14 rounded-xl bg-[#111] hover:bg-black text-white font-medium text-[15px] transition-all shadow-md shadow-black/10 flex items-center gap-2"
            disabled={items.length === 0}
            onClick={handleCheckout}
          >
            <CreditCard className="h-4 w-4" />
            Charge Rp {total().toLocaleString('id-ID')}
          </Button>
        </div>
      </div>
    </div>
  );
}
