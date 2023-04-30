import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../components/pages/catalogPage/model/slice/productDataSlice';
import singleProductReducer from '../components/pages/singleProductPage/model/slice/singleProductDataSlice'
import {queryParamsSlice} from "components/pages/catalogPage/model/slice/queryParamsSlice";
import {fetchProducts} from "components/pages/catalogPage/model/services/getProductDataFromApi";
import {fetchProduct} from "components/pages";

export const store = configureStore({
  reducer: {
    queryParams: queryParamsSlice.reducer,
    products: productsReducer,
    singleProduct: singleProductReducer,
  },
});

store.dispatch(fetchProducts());
store.dispatch(fetchProduct());
