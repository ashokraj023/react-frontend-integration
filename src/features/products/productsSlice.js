import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async  (page = 1) => {
    const response = await fetch(
  `http://localhost:3000/products?page=${page}&limit=10`
);
    const data = await response.json();
    console.log("Redux API Response:", data);
    return data;
  }
);

const initialState = {
  products: [],
  loading: false,
  error: null,
  pagination: {},
};

const productsSlice = createSlice({
  name: "products",
  initialState,

  reducers: {},

  extraReducers: (builder) => {

    builder

      .addCase(fetchProducts.pending, (state) => {

        state.loading = true;
        state.error = null;

      })

      .addCase(fetchProducts.fulfilled, (state, action) => {

        state.loading = false;
      state.products = action.payload.data;
      state.pagination = action.payload.pagination;;

      })

      .addCase(fetchProducts.rejected, (state, action) => {

        state.loading = false;
        state.error = action.error.message;

      });

  },

});

export default productsSlice.reducer;