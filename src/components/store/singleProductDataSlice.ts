import { createSlice } from '@reduxjs/toolkit';
import {fetchSingleProduct} from "components/store/getSingleProduct";
import {IProductData} from '../pages/catalogPage/types'

interface ProductState {
  item: IProductData;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  item: {
    id: 0,
    photo_url: 'fdhbgf',
    name: 'fbvfgb',
    description:'fbfg',
    price: 'dfb',
    thickness: 'dfb ',
    width: 'bf ',
    color: 'bf g'
  },
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
    builder.addCase(fetchSingleProduct.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSingleProduct.fulfilled, (state, action) => {
      state.item = action.payload;
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(fetchSingleProduct.rejected, (state, action) => {
      state.item = initialState.item;
      state.isLoading = false;
      state.error = action.payload?.toString() || 'Failed to fetch products';
    });
  },
});

export const {setProductData} = singleProductSlice.actions;
export default singleProductSlice.reducer;