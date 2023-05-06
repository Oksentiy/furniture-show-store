import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface changeState {
    confirmOrder:boolean;
}
const initialState:changeState= {
    confirmOrder:false,
}

const changeDisabledSlice = createSlice({
    name:'disabled',
    initialState,
    reducers:{
        changeDisabledConfirm(state,action:PayloadAction<boolean>){
            state.confirmOrder=action.payload;
        },
    }
});

export default changeDisabledSlice.reducer;
export const {changeDisabledConfirm} = changeDisabledSlice.actions;