import { createSlice } from "@reduxjs/toolkit";

const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: savedFavorites,
  reducers: {
    toggleFavorite: (state, action) => {
      const product = action.payload;

      const validState = state.filter((item) => item && item.id);

      const exists = validState.find((item) => item.id === product.id);

      let newState;
      if (exists) {
        newState = validState.filter((item) => item.id !== product.id);
      } else {
        newState = [...validState, product];
      }

      localStorage.setItem("favorites", JSON.stringify(newState));
      return newState;
    },
    clearFavorites: () => {
      localStorage.removeItem("favorites");
      return [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
