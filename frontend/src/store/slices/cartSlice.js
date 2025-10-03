import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }

      state.totalQuantity = state.items.reduce((acc, item) => acc + item.qty, 0);
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalQuantity = state.items.reduce((acc, item) => acc + item.qty, 0);
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );
    },
    incrementQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
      state.totalQuantity = state.items.reduce((acc, i) => acc + i.qty, 0);
      state.totalPrice = state.items.reduce((acc, i) => acc + i.price * i.qty, 0);
    },
    decrementQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
      state.totalQuantity = state.items.reduce((acc, i) => acc + i.qty, 0);
      state.totalPrice = state.items.reduce((acc, i) => acc + i.price * i.qty, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty, clearCart } =
  cartSlice.actions;

export const cartReducer = cartSlice.reducer;
