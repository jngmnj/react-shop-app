import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IOrder } from "./order.type";

export const fetchOrder = createAsyncThunk(
    "order/fetchOrder",
    async(userId: string, thunkAPI) => {
        try {
            const response = await axios.get<IOrder[]>(`https://64d2f39f67b2662bf3db87e6.mockapi.io/orders?search=${userId}`);
            return response.data; // payload 생성
        } catch(error) {
            return thunkAPI.rejectWithValue("Error receiving order")
        }
    }
)

type OrderType = {
  order: IOrder[];
  isLoading: boolean;
  error: string;
}

const initialState: OrderType = {
  order: [],
  isLoading: false,
  error: "",
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload; // order에 넣어주기
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export default orderSlice.reducer;