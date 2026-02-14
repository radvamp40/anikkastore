import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./api/auth/auth.api";
import { productApi } from "./api/product/product.api";
import { vendorApi } from "./api/vendor/vendor.api";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [productApi.reducerPath]: productApi.reducer,
        [vendorApi.reducerPath]: vendorApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware, productApi.middleware, vendorApi.middleware) 
})

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;