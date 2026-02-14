import { VendorDetailsI } from "@/types/user.types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface VendorResponseI {
  limit: number;
  users: VendorDetailsI[];
  skip: number;
  total: number;
}


export const vendorApi = createApi({
  reducerPath: "vendorApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com/users",
  }),
  endpoints: (builder) => ({
    getVendors: builder.query<VendorResponseI, { limit: number; skip: number }>(
      {
        query: ({ limit, skip }) => `?limit=${limit}&skip=${skip}`,
      },
    ),
    getVendorDetailsById: builder.query<VendorDetailsI, { id: number }>({
      query: ({ id }) => `/${id}}`,
    }),
  }),
});

export const { useGetVendorsQuery, useGetVendorDetailsByIdQuery } = vendorApi;
