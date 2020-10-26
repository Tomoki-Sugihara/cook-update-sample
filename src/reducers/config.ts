import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type configState = {
   bottomNavNum: number;
};

const initialState: configState = {
   bottomNavNum: 0,
};

const configSlice = createSlice({
   name: 'config',
   initialState,
   reducers: {
      transitPage(state, action: PayloadAction<number>) {
         state.bottomNavNum = action.payload;
      },
   },
});

export const { transitPage } = configSlice.actions;

export default configSlice.reducer;
