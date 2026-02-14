"use client";

import { ProductDetailsI } from "@/types/product.types";
import ProductGallery from "./ProductGallery";
import AddToCartButton from "./AddToCartButton";

export default function ProductDetails({
  product,
}: {
  product: ProductDetailsI;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-10">
      {/* Left: Images */}
      <ProductGallery images={product.images} thumbnail={product.thumbnail} />

      {/* Right: Info */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>

        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="mb-4">
          <span className="text-2xl font-semibold">${product.price}</span>
          <span className="ml-3 text-sm text-green-600">
            {product.discountPercentage}% off
          </span>
        </div>

        <div className="mb-2 text-sm text-gray-500">Brand: {product.brand}</div>
        <div className="mb-2 text-sm text-gray-500">
          Category: {product.category}
        </div>
        <div className="mb-6 text-sm text-gray-500">
          Rating: ⭐ {product.rating} / 5
        </div>

        <AddToCartButton product={product} />
      </div>
    </div>
  );
}
