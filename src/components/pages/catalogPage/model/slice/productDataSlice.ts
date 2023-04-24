import { createSlice } from '@reduxjs/toolkit';
import { fetchProducts } from "../services/getProductDataFromApi";
import {ProductsState} from "../types/sliceTypes";

const initialState: ProductsState = {
  items: [],
  isLoading: false,
  error: null,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSortedData: (state, action) => {
      state.items = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.items = [];
      state.isLoading = false;
      state.error = action.payload?.toString() || 'Failed to fetch products';
    });
  },
});

export const {setSortedData} = productsSlice.actions;
export default productsSlice.reducer;