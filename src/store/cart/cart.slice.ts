import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';
import { IProduct } from "../products/products.types";
import storage from "../../utils/storage";


export const postOrder = createAsyncThunk(
  "cart/postOrder",
  async (order: CartState, thunkAPI) => {
    try {
      await axios.post(
        "https://64d2f39f67b2662bf3db87e6.mockapi.io/orders",
        order
      );
      thunkAPI.dispatch(sendOrder());
    } catch (error) {
      return thunkAPI.rejectWithValue("Error sending order");
    }
  }
);

type CartState = {
    products: IProduct[];
    totalPrice: number;
    userId: string;
}

const user = storage.get<string>("userId");

const initialState: CartState = {
  // products: localStorage.getItem("cartProducts")
  products: storage.get<IProduct[]>("cartProducts")
    ? storage.get<IProduct[]>("cartProducts") // 간단하게 처리 -> error
    : [],
  totalPrice: 0,
  userId: user ? user : "", // error
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
      // localStorage.setItem("userId", JSON.stringify(state.userId));
      storage.set("userId", state.userId);
    },
    removeUserId: (state) => {
      state.userId = "";
      // localStorage.setItem("userId", JSON.stringify(state.userId));
      storage.set("userId", state.userId);
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      state.products.push({
        ...action.payload,
        quantity: 1,
        total: action.payload.price,
      });
      // localStorage.setItem("cartProducts", JSON.stringify(state.products));
      storage.set("cartProducts", state.products);
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      ); // itemid가 다른것만 반환됨
      // localStorage.setItem("cartProducts", JSON.stringify(state.products));
      storage.set("cartProducts", state.products);
    },
    decrementProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity - 1,
              total: item.price * (item.quantity - 1),
            }
          : item
      );
      storage.set("cartProducts", state.products);
    },
    incrementProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.map((item) =>
        item.id === action.payload
          ? {
              ...item,
              quantity: item.quantity + 1,
              total: item.price * (item.quantity + 1),
            }
          : item
      );
      storage.set("cartProducts", state.products);
    },
    getTotalPrice: (state) => {
      state.totalPrice = state.products.reduce(
        (acc, item) => (acc += item.total),
        0
      );
    },
    sendOrder: (state) => {
      state.products = [];
      storage.set("cartProducts", state.products);
    },
  },
});

export const {
    setUserId,
    removeUserId,
    addToCart,
    deleteFromCart,
    incrementProduct,
    decrementProduct,
    getTotalPrice,
    sendOrder,
} = cartSlice.actions;
export default cartSlice.reducer;