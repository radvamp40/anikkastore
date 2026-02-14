import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getAccessToken } from "@/utils/token.utils";
import { AuthResponseI, LoginRequestI, SignupRequestI } from "./types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
    prepareHeaders: (headers) => {
      // Attach JWT for cookies to all request
      const token = getAccessToken();
      if (token) headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<AuthResponseI, LoginRequestI>({
      query: (body) => ({
        url: "auth/login",
        method: "POST",
        body: { ...body, expiresInMins: 30 },
      }),
    }),
    signup: builder.mutation<AuthResponseI, SignupRequestI>({
      query: (body) => ({
        url: "auth/signup",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useLoginMutation, useSignupMutation } = authApi;
