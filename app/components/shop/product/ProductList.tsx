"use client";

import { ProductDetailsI } from "@/types/product.types";
import Image from "next/image";
import Link from "next/link";

export default function ProductList({
  products,
}: {
  products: ProductDetailsI[];
}) {
  return (
    <div className="flex flex-wrap gap-6">
      {products.map((product: ProductDetailsI) => (
        <div key={product.id} className="w-full sm:w-[48%] md:w-[23%]">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: ProductDetailsI }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="w-full border rounded-xl p-4 bg-white hover:shadow-lg transition">
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
          className="w-full h-48 object-cover rounded-md mb-3"
        />
        <h3 className="font-semibold text-gray-800 truncate">
          {product.title}
        </h3>
        <p className="text-blue-600 font-bold mt-1">${product.price}</p>
      </div>
    </Link>
  );
}
