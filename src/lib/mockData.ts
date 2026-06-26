export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  stock: number;
}

export const mockProducts: Product[] = [
  { id: "p1", name: "Classic Burger", category: "Food", price: 45000, image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80", stock: 50 },
  { id: "p2", name: "Cheese Burger", category: "Food", price: 55000, image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80", stock: 40 },
  { id: "p3", name: "French Fries", category: "Food", price: 25000, image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500&q=80", stock: 100 },
  { id: "p4", name: "Onion Rings", category: "Food", price: 28000, image: "https://images.unsplash.com/photo-1639024470354-94ff8a38c8c1?w=500&q=80", stock: 80 },
  { id: "p5", name: "Cola Regular", category: "Beverage", price: 15000, image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=500&q=80", stock: 200 },
  { id: "p6", name: "Iced Tea", category: "Beverage", price: 12000, image: "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=500&q=80", stock: 150 },
  { id: "p7", name: "Vanilla Milkshake", category: "Beverage", price: 35000, image: "https://images.unsplash.com/photo-1572490122747-3968b75bb811?w=500&q=80", stock: 30 },
  { id: "p8", name: "Chocolate Ice Cream", category: "Dessert", price: 20000, image: "https://images.unsplash.com/photo-1563805042-7684c8e9e1cb?w=500&q=80", stock: 60 },
  { id: "p9", name: "Fried Chicken", category: "Food", price: 60000, image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=500&q=80", stock: 45 },
  { id: "p10", name: "Hot Dog", category: "Food", price: 40000, image: "https://images.unsplash.com/photo-1599599811450-2c5980a06584?w=500&q=80", stock: 55 },
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
