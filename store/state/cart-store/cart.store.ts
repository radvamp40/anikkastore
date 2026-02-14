import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface CartItemI {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  quantity: number;
}

interface CartStateI {
  items: CartItemI[];

  addItem: (item: Omit<CartItemI, "quantity">) => void;
  removeItem: (id: number) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
}

export const useCartStore = create<CartStateI>()(
  devtools(
    persist(
      (set, get) => ({
        items: [],

        addItem: (item) => {
          const items = get().items;

          
          // STEP 1: Check if already exists
          const existingItem = items.find((i) => i.id === item.id);

          if (existingItem) {
            const increasedQty = items.map((i) => {
              const isExistingitem = i.id === item.id;
              const existingQty = i.quantity;

              if (isExistingitem) {
                return { ...i, quantity: existingQty + 1 };
              }

              return i;
            });

            set({
              items: increasedQty,
            });
          } else {
            set({
              items: [...items, { ...item, quantity: 1 }],
            });
          }
        },

        removeItem: (id) => {
          const items = get().items;

          const filteredItems = items.filter((i) => i.id !== id);

          set({
            items: filteredItems,
          });
        },

        increaseQty: (id) => {
          const items = get().items;

          const increasedQty = items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
          );

          set({ items: increasedQty });
        },

        decreaseQty: (id) => {
          const items = get().items;

          const decreasedQty = items.map((i) =>
            i.id === id ? { ...i, quantity: i.quantity - 1 } : i,
          );

          set({ items: decreasedQty });
        },

        clearCart: () => set({ items: [] }),

        totalItems: () => {
          const items = get().items;

          const total = items.reduce((total, i) => i.quantity + total, 0);
          return total;
        },

        totalPrice: () => {
          const items = get().items;

          const total = items.reduce((total, i) => i.price + total, 0);

          return total;
        },
      }),
      { name: "cart-storage" }, // localstorage key
    ),
  ),
);
