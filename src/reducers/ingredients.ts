import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ingredientState = {
   id: string;
   name: string;
   memo?: string;
   amount: number;
   nextAmount: number | null;
   unit: string;
   moderation: number; //加減
   default: boolean; //加減を変更したかどうか
   right: boolean; //単位が右か左か
};

const initialState: ingredientState[] = [
   {
      id: '9a8f2571-726e-4380-8511-137daf9072fc',
      name: '塩',
      amount: 5,
      unit: 'mg',
      moderation: 1,
      nextAmount: null,
      default: false,
      right: true,
   },
   {
      id: 'fb339be0-e709-4b96-8055-61cb0d359849',
      name: 'オリーブオイル',
      amount: 1.5,
      unit: '大さじ',
      moderation: 1.25,
      nextAmount: null,
      default: true,
      right: false,
   },
   {
      id: 'cf45174d-6102-4522-851f-11ff252434ad',
      name: 'オリーブオイル',
      amount: 1.5,
      unit: '大さじ',
      moderation: 1.25,
      nextAmount: null,
      default: true,
      right: false,
   },
   {
      id: '70d528c0-0f45-4af8-93a8-2c6a2bfb0ffa',
      name: '塩',
      amount: 5,
      nextAmount: null,
      unit: 'mg',
      moderation: 1,
      default: false,
      right: true,
   },
   {
      id: '70d528c0-0f45-4af8-93a8-2c6a2bfb0ffa',
      name: 'オリーブオイル',
      memo: 'いい感じ',
      amount: 1.3,
      nextAmount: null,
      unit: '大さじ',
      moderation: 1,
      default: false,
      right: false,
   },
   {
      id: '441f8116-4eee-49d2-9201-67b5ec81baed',
      name: 'みりん',
      amount: 5,
      nextAmount: null,
      unit: 'mg',
      moderation: 1,
      default: false,
      right: true,
   },
   {
      id: 'f80f79ab-1911-49bc-bd46-8d0fde4e99f5',
      name: '醤油',
      amount: 1.5,
      nextAmount: null,
      unit: '大さじ',
      moderation: 1.25,
      default: true,
      right: false,
   },
   {
      id: 'f1c9ae7f-b3ee-443e-87a0-bddc6e1b182b',
      name: 'みりん',
      amount: 5,
      nextAmount: null,
      unit: '小さじ',
      moderation: 1,
      default: true,
      right: false,
   },
   {
      id: '9d2cf0d3-29f2-4c91-b87f-226b5c9fe582',
      name: '醤油',
      amount: 1.5,
      nextAmount: null,
      unit: '大さじ',
      moderation: 0.75,
      default: false,
      right: false,
   },
];

const ingredientsSlice = createSlice({
   name: 'ingredients',
   initialState,
   reducers: {},
});

export default ingredientsSlice.reducer;