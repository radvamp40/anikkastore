import { ProductCategoryI, ProductDetailsI } from "@/types/product.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface ProductsByCategoryResponseI {
  limit: number,
  products: ProductDetailsI[],
  skip: number,
  total: number
}

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/products",
  }),
  endpoints: (builder) => ({
    productCategories: builder.query<ProductCategoryI[], void>({
      query: () => "/categories",
    }),
    getProductsByCategory: builder.query<ProductsByCategoryResponseI, {category: string, limit: number, skip:number} >({
      query: ({category, limit, skip}) => `/category/${category}?limit=${limit}&skip=${skip}`
    })
  }),
});

export const  { useProductCategoriesQuery, useGetProductsByCategoryQuery } = productApi