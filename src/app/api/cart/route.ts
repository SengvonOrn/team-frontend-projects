import { NextRequest, NextResponse } from "next/server";

// Temporary in-memory cart storage
let cartItems: { id: number; name: string; price: number; quantity: number }[] =
  [];

export async function GET() {
  // Return all cart items
  return NextResponse.json(cartItems);
}

export async function POST(req: NextRequest) {
  const data = await req.json();
  const existingItem = cartItems.find((item) => item.id === data.id);

  if (existingItem) {
    existingItem.quantity += data.quantity || 1;
  } else {
    cartItems.push({ ...data, quantity: data.quantity || 1 });
  }

  return NextResponse.json({ success: true, cart: cartItems });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = Number(searchParams.get("id"));

  cartItems = cartItems.filter((item) => item.id !== id);

  return NextResponse.json({ success: true, cart: cartItems });
}
