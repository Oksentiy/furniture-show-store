import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (params, thunkAPI) => {
    const response = await fetch(`http://164.90.237.173/api/v1/products?${params}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  }
);