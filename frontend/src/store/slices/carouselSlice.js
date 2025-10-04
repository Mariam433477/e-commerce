import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getCarousel } from "../../custom/Api/carouselApi";

export const fetchCarousel = createAsyncThunk(
  "carousel/fetchCarousel",
  async () => {
    const response = await getCarousel();

    console.log(response.data);
    return response.data;
  }
);

const carouselSlice = createSlice({
  name: "carousel",
  initialState: {
    slides: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarousel.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCarousel.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.slides = action.payload;
      })
      .addCase(fetchCarousel.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const carouselReducer = carouselSlice.reducer;
