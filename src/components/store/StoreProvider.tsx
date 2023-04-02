// import {FC, ReactNode} from 'react';
// import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
// import thunkMiddleware from 'redux-thunk';
// import productsReducer from './productDataSlice';
//
// const store = configureStore({
//   reducer: {
//     productDetails: productsReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(thunkMiddleware),
// });
//
// interface StoreProviderProps {
//   children: ReactNode;
// }
//
// export const StoreProvider:FC = ({ children }: StoreProviderProps) => {
//
//   return <Provider store={store}>{children}</Provider>;
// };
