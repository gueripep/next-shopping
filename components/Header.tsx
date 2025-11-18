"use client";

import { useCart } from "@/context/CartContext";

export default function Header() {
  const { toggleCart, getCartCount } = useCart();

  return (
    <header className="bg-white shadow-md sticky top-0 z-30">
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-blue-600">ShopNext</h1>
          <button
            onClick={toggleCart}
            className="relative bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors cursor-pointer"
          >
            Cart
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-6 h-6 rounded-full flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
