import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IngredientInfoType } from '../types/ingredientsType';

const initialState: IngredientInfoType[] = [
   {
      id: '9a8f2571-726e-4380-8511-137daf9072fc',
      name: '塩',
      unit: 'mg',
      right: true,
   },
   {
      id: 'fb339be0-e709-4b96-8055-61cb0d359849',
      name: 'オリーブオイル',
      unit: '大さじ',
      right: false,
   },
   {
      id: '441f8116-4eee-49d2-9201-67b5ec81baed',
      name: 'みりん',
      unit: 'mg',
      right: true,
   },
   {
      id: 'f80f79ab-1911-49bc-bd46-8d0fde4e99f5',
      name: '醤油',
      unit: '大さじ',
      right: false,
   },
];

const ingredientsSlice = createSlice({
   name: 'ingredients',
   initialState,
   reducers: {},
});

export default ingredientsSlice.reducer;
