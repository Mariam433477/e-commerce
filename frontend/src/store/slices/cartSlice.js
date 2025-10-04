import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

 
const savedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
const savedTotalQuantity =
  JSON.parse(localStorage.getItem("cartTotalQuantity")) || 0;
const savedTotalPrice = JSON.parse(localStorage.getItem("cartTotalPrice")) || 0;

const initialState = {
  items: savedItems,
  totalQuantity: savedTotalQuantity,
  totalPrice: savedTotalPrice,
};
 
const saveToLocalStorage = (state) => {
  localStorage.setItem("cartItems", JSON.stringify(state.items));
  localStorage.setItem(
    "cartTotalQuantity",
    JSON.stringify(state.totalQuantity)
  );
  localStorage.setItem("cartTotalPrice", JSON.stringify(state.totalPrice));
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((item) => item.id === product.id);

      if (existing) {
        if (existing.qty < product.stock) {
          existing.qty += 1;
        } else {
          Swal.fire({
            icon: "warning",
            title: "وصلت الحد الأقصى للمخزون",
            text: `المنتج "${product.title}" لا يمكن زيادته عن ${product.stock}`,
            timer: 2000,
            showConfirmButton: false,
          });
        }
      } else {
        if (product.stock > 0) {
          state.items.push({ ...product, qty: 1 });
        } else {
          Swal.fire({
            icon: "error",
            title: "المنتج غير متوفر",
            text: `المنتج "${product.title}" غير متوفر حالياً`,
            timer: 2000,
            showConfirmButton: false,
          });
        }
      }

      state.totalQuantity = state.items.reduce(
        (acc, item) => acc + item.qty,
        0
      );
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );

      saveToLocalStorage(state);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalQuantity = state.items.reduce(
        (acc, item) => acc + item.qty,
        0
      );
      state.totalPrice = state.items.reduce(
        (acc, item) => acc + item.price * item.qty,
        0
      );

      saveToLocalStorage(state);
    },

    incrementQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        if (item.qty < item.stock) {
          item.qty += 1;
        } else {
          Swal.fire({
            icon: "warning",
            title: "وصلت الحد الأقصى للمخزون",
            text: `المنتج "${item.title}" لا يمكن زيادته عن ${item.stock}`,
            timer: 2000,
            showConfirmButton: false,
          });
        }
      }

      state.totalQuantity = state.items.reduce((acc, i) => acc + i.qty, 0);
      state.totalPrice = state.items.reduce(
        (acc, i) => acc + i.price * i.qty,
        0
      );

      saveToLocalStorage(state);
    },

    decrementQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;

      state.totalQuantity = state.items.reduce((acc, i) => acc + i.qty, 0);
      state.totalPrice = state.items.reduce(
        (acc, i) => acc + i.price * i.qty,
        0
      );

      saveToLocalStorage(state);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;

      saveToLocalStorage(state);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQty,
  decrementQty,
  clearCart,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
