import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { userReducer } from "./slices/userSlice";
import { counterReducer } from "./slices/counterSlice";
import { cartReducer } from "./slices/cartSlice";
import { carouselReducer } from "./slices/carouselSlice";
import { favoriteReducer } from "./slices/favSlice";

export const store = configureStore({
  reducer: {
    productSlice: productReducer,
    userSlice: userReducer,
    counter: counterReducer,
    cart: cartReducer,
    carousel: carouselReducer,
    favorites: favoriteReducer,
  },
});
