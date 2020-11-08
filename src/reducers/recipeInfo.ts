import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type recipeInfoState = {
   id: string;
   memo?: string;
   images?: string[];
   person: number; //何人分
   created_at: Date;
   updated_at: Date; //?
   ingredientInfo: {
      id: string;
      ingredientId: string;
      amount: number;
      nextAmount: number | null;
      moderation: number; //加減
      default: boolean; //加減を変更したかどうか
   }[];
};

const initialState: recipeInfoState[] = [
   {
      id: 'bec7e382-824a-4e09-8c5b-64f3a1f6aa8d',
      memo: '少し辛い',
      images: [
         'data:image/jpeg;base64,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',
      ],
      created_at: new Date('2020-11-08T09:13:13.500Z'),
      updated_at: new Date('2020-11-08T09:13:13.500Z'),
      person: 1,
      ingredientInfo: [
         {
            id: '9a8f2571-726e-4380-8511-137daf9072fb',
            ingredientId: '9a8f2571-726e-4380-8511-137daf9072fc',
            moderation: 1,
            amount: 5,
            nextAmount: null,
            default: false,
         },
      ],
   },
   {
      id: '70d528c0-0f45-4af8-93a8-2c6a2bfb0ffa',
      memo: '少し辛い',
      images: [
         'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSabVGTrjHZ5gu8tq8T7-YPWZ_CZaFXt5ePmQ&usqp=CAU',
         'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSabVGTrjHZ5gu8tq8T7-YPWZ_CZaFXt5ePmQ&usqp=CAU',
      ],
      created_at: new Date('2020-11-08T09:13:13.500Z'),
      updated_at: new Date('2020-11-08T09:13:13.500Z'),
      person: 1,
      ingredientInfo: [
         {
            id: '9a8f2571-726e-4380-8511-137daf9072fc',
            ingredientId: '9a8f2571-726e-4380-8511-138daf9072fc',
            moderation: 1,
            amount: 5,
            nextAmount: null,
            default: false,
         },
      ],
   },
   {
      id: '06c61785-2df4-4e8f-b76f-de8bd2dab824',
      memo: '少し辛い',
      created_at: new Date('2020-11-08T09:13:13.500Z'),
      updated_at: new Date('2020-11-08T09:13:13.500Z'),
      person: 1,
      ingredientInfo: [
         {
            id: '9a8f2571-726e-4380-8511-137daf9072fc',
            ingredientId: '9a8f2572-726e-4380-8511-137daf9072fc',
            moderation: 1,
            amount: 5,
            nextAmount: null,
            default: false,
         },
      ],
   },
   {
      id: 'a2fa5644-33df-4102-8695-406c4aba95b2',
      memo: 'おいしい！',
      created_at: new Date('2020-11-08T09:13:13.500Z'),
      updated_at: new Date('2020-11-08T09:13:13.500Z'),
      person: 2,
      ingredientInfo: [
         {
            id: 'fb339be0-e709-4b96-8055-61cb0d359849',
            ingredientId: 'fb349be0-e709-4b96-8055-61cb0d359849',
            amount: 1.5,
            moderation: 1.25,
            nextAmount: null,
            default: true,
         },
      ],
   },
];

const recipeInfoSlice = createSlice({
   name: 'recipesInfo',
   initialState,
   reducers: {},
});

export default recipeInfoSlice.reducer;
