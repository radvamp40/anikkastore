"use client";

import { useCartStore } from "@/store/state/cart-store/cart.store";
import Link from "next/link";

export default function Navbar() {
  const totalItems = useCartStore((state) => state.totalItems());

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        {/* Logo / Brand */}

        <Link href="/" className="text-xl font-bold text-gray-900">
          KidsWear
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/shop"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/vendors"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Vendors
          </Link>
          <Link
            href="/cart"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            🛒
            {totalItems && (
              <span className="ml-2 inline-flex items-center justify-center text-xs bg-red-500 text-white rounded-full w-5 h-5">
                {totalItems}
              </span>
            )}
          </Link>
          <Link
            href="/login"
            className="text-gray-700 hover:text-gray-900 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
