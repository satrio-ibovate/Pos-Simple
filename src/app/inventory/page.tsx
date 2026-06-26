"use client";

import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function InventoryPage() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('/api/products');
        const data = await res.json();
        if (Array.isArray(data)) {
          setProducts(data);
        }
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  
  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) || 
    p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-[1200px] mx-auto">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-[#111]">Inventory</h1>
          <p className="text-[#888] mt-1 text-sm">Manage your products, categories, and stock levels.</p>
        </div>
        <Button className="bg-[#111] hover:bg-black text-white rounded-lg px-5 shadow-sm font-medium">
          <Plus className="mr-2 h-4 w-4" /> Add Product
        </Button>
      </div>

      <div className="bg-white border border-[#eaeaea] rounded-xl overflow-hidden shadow-sm">
        <div className="p-4 border-b border-[#eaeaea] flex items-center bg-[#fafafa]/50">
          <div className="relative max-w-md w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#888]" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-9 h-9 bg-white border-[#eaeaea] focus-visible:ring-1 focus-visible:ring-[#111] focus-visible:border-[#111] text-sm shadow-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <Table>
          <TableHeader className="bg-[#fafafa]">
            <TableRow className="border-[#eaeaea] hover:bg-transparent">
              <TableHead className="w-[80px] font-medium text-[#888]">Image</TableHead>
              <TableHead className="font-medium text-[#888]">Name</TableHead>
              <TableHead className="font-medium text-[#888]">Category</TableHead>
              <TableHead className="text-right font-medium text-[#888]">Price</TableHead>
              <TableHead className="text-right font-medium text-[#888]">Stock</TableHead>
              <TableHead className="text-right font-medium text-[#888]">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-10 text-[#888]">Loading products...</TableCell>
              </TableRow>
            ) : filteredProducts.map((product) => (
              <TableRow key={product.id} className="border-[#eaeaea] hover:bg-[#fafafa]/50 transition-colors">
                <TableCell>
                  <div className="h-10 w-10 bg-[#fafafa] border border-[#eaeaea] rounded-md overflow-hidden flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                  </div>
                </TableCell>
                <TableCell className="font-medium text-[#111]">{product.name}</TableCell>
                <TableCell className="text-[#666]">{product.category}</TableCell>
                <TableCell className="text-right text-[#111]">Rp {product.price.toLocaleString('id-ID')}</TableCell>
                <TableCell className="text-right font-medium text-[#111]">{product.stock}</TableCell>
                <TableCell className="text-right">
                  <Badge 
                    variant="outline"
                    className={
                      product.stock > 50 ? "bg-[#fafafa] border-[#eaeaea] text-[#111]" : 
                      product.stock > 20 ? "bg-amber-50 border-amber-200 text-amber-700" : 
                      "bg-red-50 border-red-200 text-red-700"
                    }
                  >
                    {product.stock > 50 ? "In Stock" : product.stock > 20 ? "Low Stock" : "Critical"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
