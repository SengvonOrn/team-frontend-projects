"use client";
import { useContext } from "react";
import { CartContext } from "@/context/cart/CartContext";
import { AuthContext } from "@/context/auth/AuthContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const { cartItems, removeItem, decreaseQty, increaseQty } =
    useContext(CartContext);
  const { user } = useContext(AuthContext);

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      {/* Show message if user is not logged in */}
      {!user && (
        <p className="mb-4 text-gray-500">
          You are not logged in. You can still view your cart.
        </p>
      )}

      {/* If cart is empty */}
      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cartItems.map((item) => (
            <Card key={item.id} className="p-4">
              <h2 className="font-bold text-lg">{item.name}</h2>
              <p className="text-green-600 font-bold">${item.price}</p>
              <p>
                {item.name} ${item.price} x {item.quantity}
              </p>

              <div className="flex gap-2 mt-2">
                <Button onClick={() => decreaseQty(item.id)}>-</Button>
                <span>{item.quantity}</span>
                <Button onClick={() => increaseQty(item.id)}>+</Button>
              </div>

              <Button className="mt-2" onClick={() => removeItem(item.id)}>
                Remove
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
