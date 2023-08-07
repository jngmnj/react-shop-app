import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/user.slice";
import categoriesSlice from "./categories/categories.slice";
import productsSlice from "./products/products.slice";
import cartSlice from "./cart/cart.slice";

export const store = configureStore({
  reducer: {
    cartSlice,
    userSlice,
    categoriesSlice,
    productsSlice,
  },
});