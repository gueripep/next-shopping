"use client";

import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import Cart from "@/components/Cart";
import { products } from "@/data/products";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Cart />
      <main className="container mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Featured Products
          </h2>
          <p className="text-gray-600">
            Discover our amazing collection of products
          </p>
        </div>
        <ProductGrid products={products} />
      </main>
    </div>
  );
}
