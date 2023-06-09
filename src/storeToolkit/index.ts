import { combineReducers, configureStore } from "@reduxjs/toolkit";
import companySlice from "./companySlice";
import userSlice from "./userSlice";
import isLogModalSlice from "./isLogModalSlice";
import informationSlice from "./informationSlice";
import counterBasketSlice from "./counterBasketSlice";


const rootReducer = combineReducers({
    companiesPrice:companySlice,
    userMe:userSlice,
    logReg:isLogModalSlice,
    checkout:informationSlice,
    counter:counterBasketSlice,
});

export const store = configureStore({
    reducer: rootReducer,
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;