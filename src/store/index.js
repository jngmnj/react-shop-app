import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart/cart.slice";
import userSlice from "./user/user.slice";
import categoriesSlice from "./categories/categories.slice";
import productsSlice from "./products/products.slice";
import productSlice from './products/product.slice';

export const store = configureStore({
  reducer: {
    cartSlice,
    userSlice,
    categoriesSlice,
    productsSlice,
    productSlice
  },
});
