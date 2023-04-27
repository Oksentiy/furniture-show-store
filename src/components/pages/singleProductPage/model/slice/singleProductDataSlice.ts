import { createSlice } from '@reduxjs/toolkit';
import {fetchProduct} from "components/pages/singleProductPage/model/services/getSingleProduct";
import { ProductState} from "components/pages/singleProductPage/types/singleProductSchema";

const initialState: ProductState = {
  item: null,
  isLoading: false,
  error: null,
};

const singleProductSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProductData: (state, action) => {
      state.item = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.item = initialState.item;
      state.isLoading = false;
      state.error = action.payload?.toString() || 'Failed to fetch product';
    });
  },
});

// export const {setProductData} = singleProductSlice.actions;
export default singleProductSlice.reducer;