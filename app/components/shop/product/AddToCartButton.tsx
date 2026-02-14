"use client";

import { useCartStore } from "@/store/state/cart-store/cart.store";
import { ProductDetailsI } from "@/types/product.types";

export default function AddToCartButton({
  product,
}: {
  product: ProductDetailsI;
}) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    // Later: connect this to Zustand cart store
    addItem(product);
  };

  return (
    <button
      onClick={handleAddToCart}
      className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
    >
      Add to Cart
    </button>
  );
}
