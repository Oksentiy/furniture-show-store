import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (id) => {
    const response = await fetch(`http://164.90.237.173/api/v1/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  }
);
