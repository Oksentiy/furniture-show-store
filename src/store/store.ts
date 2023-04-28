import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../components/pages/catalogPage/model/slice/productDataSlice';
import singleProductReducer from '../components/pages/singleProductPage/model/slice/singleProductDataSlice'
import companyReducer from '../components/pages/companyPage/model/slice/companyDataSlice'
import {queryParamsSlice} from "components/pages/catalogPage/model/slice/queryParamsSlice";
import {fetchProducts} from "components/pages/catalogPage/model/services/getProductDataFromApi";
import {fetchProduct} from "components/pages";
import {fetchCompany} from "components/pages/companyPage/model/services/getCompanyData";

export const store = configureStore({
  reducer: {
    queryParams: queryParamsSlice.reducer,
    products: productsReducer,
    singleProduct: singleProductReducer,
    company: companyReducer,
  },
});

store.dispatch(fetchProducts());
store.dispatch(fetchProduct());
store.dispatch(fetchCompany());