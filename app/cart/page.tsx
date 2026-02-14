"use client";

import { useCartStore } from "@/store/state/cart-store/cart.store";

export default function CartPage() {
  const { items, increaseQty, decreaseQty, removeItem, totalPrice } =
    useCartStore();

  if (items.length === 0) {
    return <div className="p-6 text-center">Your cart is empty 🛒</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border p-4 rounded-lg"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <div>
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm text-gray-500">${item.price}</div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-2 border rounded"
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                onClick={() => increaseQty(item.id)}
                className="px-2 border rounded"
              >
                +
              </button>
              <button
                onClick={() => removeItem(item.id)}
                className="ml-4 text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right text-xl font-bold">
        Total: ${totalPrice().toFixed(2)}
      </div>
    </div>
  );
}
