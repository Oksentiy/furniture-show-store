import {createAsyncThunk} from '@reduxjs/toolkit';

import {useParams} from "react-router-dom";

export const fetchSingleProduct = createAsyncThunk(
  'product/fetchProduct',
  async () => {
    // const { id } = useParams();
    const response = await fetch(`http://164.90.237.173/api/v1/products/17`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    return await response.json();
  }
);