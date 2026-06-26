export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  stock: number;
}

export const mockProducts: Product[] = [
  { id: "p1", name: "Classic Burger", category: "Food", price: 45000, image: "🍔", stock: 50 },
  { id: "p2", name: "Cheese Burger", category: "Food", price: 55000, image: "🍔", stock: 40 },
  { id: "p3", name: "French Fries", category: "Food", price: 25000, image: "🍟", stock: 100 },
  { id: "p4", name: "Onion Rings", category: "Food", price: 28000, image: "🧅", stock: 80 },
  { id: "p5", name: "Cola Regular", category: "Beverage", price: 15000, image: "🥤", stock: 200 },
  { id: "p6", name: "Iced Tea", category: "Beverage", price: 12000, image: "🍵", stock: 150 },
  { id: "p7", name: "Vanilla Milkshake", category: "Beverage", price: 35000, image: "🥛", stock: 30 },
  { id: "p8", name: "Chocolate Ice Cream", category: "Dessert", price: 20000, image: "🍦", stock: 60 },
  { id: "p9", name: "Fried Chicken", category: "Food", price: 60000, image: "🍗", stock: 45 },
  { id: "p10", name: "Hot Dog", category: "Food", price: 40000, image: "🌭", stock: 55 },
];

export const mockCategories = ["All", "Food", "Beverage", "Dessert"];

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  loyaltyPoints: number;
}

export const mockCustomers: Customer[] = [
  { id: "c1", name: "Budi Santoso", email: "budi@example.com", phone: "081234567890", loyaltyPoints: 120 },
  { id: "c2", name: "Siti Aminah", email: "siti@example.com", phone: "081987654321", loyaltyPoints: 45 },
  { id: "c3", name: "Andi Wijaya", email: "andi@example.com", phone: "085678901234", loyaltyPoints: 300 },
];

export interface Transaction {
  id: string;
  date: string;
  amount: number;
  items: number;
  status: "Completed" | "Pending" | "Cancelled";
}

export const mockTransactions: Transaction[] = [
  { id: "TRX-1001", date: "2026-06-26 10:23", amount: 155000, items: 4, status: "Completed" },
  { id: "TRX-1002", date: "2026-06-26 11:05", amount: 45000, items: 1, status: "Completed" },
  { id: "TRX-1003", date: "2026-06-26 12:45", amount: 280000, items: 8, status: "Completed" },
  { id: "TRX-1004", date: "2026-06-26 13:10", amount: 120000, items: 3, status: "Pending" },
  { id: "TRX-1005", date: "2026-06-26 14:30", amount: 35000, items: 1, status: "Cancelled" },
];
