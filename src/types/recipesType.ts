export type IngredientDataType = {
   id: string;
   ingredientId: string;
   amount: number;
   nextAmount: number | null;
   moderation: number; //加減
   default: boolean; //加減を変更したかどうか
};
export type RecipeInfoType = {
   id: string;
   memo?: string;
   images?: string[];
   person: number; //何人分
   created_at: Date;
   updated_at: Date; //?
   ingredientInfo: IngredientDataType[];
};
