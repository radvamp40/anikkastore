"use client";

import { useProductCategoriesQuery } from "@/store/api/product/product.api";
import CategoryGrid from "../components/shop/category-grid/CategoryGrid";

export default function Shop() {
  const { data, isLoading, error, isError } = useProductCategoriesQuery();

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <p className="text-gray-600">Loading categories...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <p className="text-red-500">Failed to load categories</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>
      {data && <CategoryGrid categories={data} />}
    </div>
  );
}
