import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchOrder = createAsyncThunk(
    "order/fetchOrder",
    async(userId, thunkAPI) => {
        try {
            const response = await axios.get(`https://64d2f39f67b2662bf3db87e6.mockapi.io/orders?search=${userId}`);
            return response.data; // payload 생성
        } catch(error) {
            return thunkAPI.rejectWithValue("Error receiving order")
        }
    }
)

const initialState = {
  order: {},
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
        state.error = action.payload;
      });
  },
});

export default orderSlice.reducer;