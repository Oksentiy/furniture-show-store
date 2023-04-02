import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productDataSlice';
import singleProductReducer from './singleProductDataSlice'
import {fetchProducts} from "components/store";
import {queryParamsSlice} from "components/store/queryParamsSlice";

export const store = configureStore({
  reducer: {
    queryParams: queryParamsSlice.reducer,
    products: productsReducer,
    singleProduct: singleProductReducer,
  },
});

store.dispatch(fetchProducts());