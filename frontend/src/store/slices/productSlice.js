import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getProductById } from "../../Custom/Api/fetchApi";

export const getAllProductAction = createAsyncThunk(
  "product/getAllProductAction",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let res = await getAllProducts();
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getProductByIdAction = createAsyncThunk(
  "product/getProductByIdAction",
  async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      let res = await getProductById(args);
      console.log(res.data);
      return res.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [
      {
        id: "1",
        name: "Watch",
        price: "750",
      },
    ],
    errors: null,
    isLoading: false,
    product: {},
  },
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(getAllProductAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProductAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload.products || [];
    });
    builder.addCase(getAllProductAction.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload.message;
    });
    builder.addCase(getProductByIdAction.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProductByIdAction.fulfilled, (state, action) => {
      state.isLoading = false;
      state.product = action.payload;
    });
    builder.addCase(getProductByIdAction.rejected, (state, action) => {
      state.isLoading = false;
      state.errors = action.payload.message;
    });
  },
});
export const productReducer = productSlice.reducer;
