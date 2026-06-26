import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { items, amount } = body;

    // items should be an array of { id: string, quantity: number, price: number }

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Invalid items" }, { status: 400 });
    }

    const transaction = await prisma.transaction.create({
      data: {
        amount,
        itemsCount: items.reduce((acc, item) => acc + item.quantity, 0),
        status: "Completed",
        items: {
          create: items.map(item => ({
            productId: item.id,
            quantity: item.quantity,
            price: item.price
          }))
        }
      }
    });

    // Update stock
    for (const item of items) {
      await prisma.product.update({
        where: { id: item.id },
        data: { stock: { decrement: item.quantity } }
      });
    }

    return NextResponse.json(transaction);
  } catch (error) {
    console.error("Error creating transaction:", error);
    return NextResponse.json({ error: "Failed to create transaction" }, { status: 500 });
  }
}
