import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProduct = createAsyncThunk(
  'product/fetchProduct',
  async (id) => {
    const response = await fetch(`http://164.90.237.173/api/v1/products/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    // console.log("повинна отримати лише один продукт",`бhttp://164.90.237.173/api/v1/products/${id}`)
    return await response.json();
  }
);

// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
//
// export const fetchProduct = createAsyncThunk(
//   'products/fetchProducts',
//   async (id, thunkAPI) => {
//     const response = await axios.get(`http:164.90.237.173/api/v1/products/${id}`, {
//     headers: { Accept: 'application/javascript' },
//     transformResponse: [(data) => {
//       return JSON.parse(data);
//     }]
//   });
//     return response.data;
//   }
// );