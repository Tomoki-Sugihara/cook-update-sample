import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Ingredient } from '../CookItem';
export type RecipeState = {
   id: number;
   name: string;
   memo: string;
   ingredients: Ingredient[];
};
const initialState: RecipeState[] = [
   {
      id: 1,
      name: 'ペペロンチーノ',
      memo: '辛い',
      ingredients: [
         { name: '塩', amount: 5, unit: 'mg' },
         { name: '醤油', amount: 1.5, unit: '大さじ' },
      ],
   },
];

const recipesSlice = createSlice({
   name: 'recipes',
   initialState,
   reducers: {
      changeMemo(state, action: PayloadAction<string>) {
         state[0].memo = action.payload;
      },
   },
});

export const { changeMemo } = recipesSlice.actions;

export default recipesSlice.reducer;
