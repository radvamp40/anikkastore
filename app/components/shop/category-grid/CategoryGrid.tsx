"use client";

import { ProductCategoryI } from "@/types/product.types";
import Link from "next/link";

export default function CategoryGrid({
  categories,
}: {
  categories: ProductCategoryI[];
}) {
  return (
    <div className="">
      {categories.map((category, i) => (
        <div key={i}>
          <CategoryCard category={category} />
        </div>
      ))}
    </div>
  );
}

function CategoryCard({ category }: { category: ProductCategoryI }) {
  return (
    <Link href={`/shop/${category.slug}`}>
      <h3 className="text-lg font-semibold capitalize text-gray-600 hover:text-blue-700">
        {category.name.replace("-", " ")}
      </h3>
    </Link>
  );
}
