import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { userReducer } from "./slices/userSlice";
import {counterReducer } from "./slices/counterSlice";
import { cartReducer } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    productSlice: productReducer,
    userSlice: userReducer,
        counter: counterReducer,
         cart: cartReducer,

  },
});
