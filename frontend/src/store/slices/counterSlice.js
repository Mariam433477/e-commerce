import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0,
};

const counterSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.cartCount += 1;
    },
    decrement: (state) => {
      if (state.cartCount > 0) state.cartCount -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
