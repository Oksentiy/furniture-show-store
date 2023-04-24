import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QueryParamsState {
  queryParams: string;
}

const initialState: QueryParamsState = {
  queryParams: '',
};

export const queryParamsSlice = createSlice({
  name: 'queryParams',
  initialState,
  reducers: {
    setQueryParams: (state, action: PayloadAction<string>) => {
      state.queryParams = action.payload;
    },
  },
});

export const { setQueryParams } = queryParamsSlice.actions;

