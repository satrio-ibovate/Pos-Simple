import { Pool } from 'pg';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import { mockProducts, mockTransactions, mockCustomers } from '../src/lib/mockData';
import 'dotenv/config';

const connectionString = `${process.env.DATABASE_URL}`;
const pool = new Pool({ connectionString });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  // Seed Products
  for (const product of mockProducts) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: {},
      create: {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.image,
        stock: product.stock,
      },
    });
  }
  console.log("Products seeded.");

  // Seed Customers
  for (const customer of mockCustomers) {
    await prisma.customer.upsert({
      where: { id: customer.id },
      update: {},
      create: {
        id: customer.id,
        name: customer.name,
        email: customer.email,
        phone: customer.phone,
        loyaltyPoints: customer.loyaltyPoints,
      },
    });
  }
  console.log("Customers seeded.");

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
