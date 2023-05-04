import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../components/pages/catalogPage/model/slice/productDataSlice';
import singleProductReducer from '../components/pages/singleProductPage/model/slice/singleProductDataSlice'
import {queryParamsSlice} from "components/pages/catalogPage/model/slice/queryParamsSlice";
import {fetchProducts} from "components/pages/catalogPage/model/services/getProductDataFromApi";
import {fetchProduct} from "components/pages";
import companySlice from 'storeToolkit/companySlice';
import userSlice from 'storeToolkit/userSlice';
import isLogModalSlice from 'storeToolkit/isLogModalSlice';
import informationSlice from 'storeToolkit/informationSlice';
import counterBasketSlice from 'storeToolkit/counterBasketSlice';

export const store = configureStore({
  reducer: {
    queryParams: queryParamsSlice.reducer,
    products: productsReducer,
    singleProduct: singleProductReducer,
    companiesPrice:companySlice,
    userMe:userSlice,
    logReg:isLogModalSlice,
    checkout:informationSlice,
    counter:counterBasketSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.dispatch(fetchProducts());
store.dispatch(fetchProduct());
