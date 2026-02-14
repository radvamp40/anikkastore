"use client";

import Pagination from "@/app/components/pagination/Pagination";
import ProductList from "@/app/components/shop/product/ProductList";
import { useGetProductsByCategoryQuery } from "@/store/api/product/product.api";
import { useParams } from "next/navigation";
import { useState } from "react";

const LIMIT = 10;

export default function ProductsByCategoryPage() {
  const params = useParams();

  const [page, setPage] = useState(1);
  const skip = (page - 1) * LIMIT;

  const category = params.category as string;
  const { data, isLoading, isError, error } = useGetProductsByCategoryQuery({
    category: category,
    limit: LIMIT,
    skip: skip,
  });

  return (
    <div className="max-w-7xl mx-auto p-6">
      {category && (
        <h2 className="text-3xl font-bold mb-8 capitalize">
          List of products in {category.replace("-", " ")} category
        </h2>
      )}

      {data && (
        <div>
          <ProductList products={data.products} />

          <Pagination
            currentPage={page}
            total={data.total}
            limit={LIMIT}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
}
