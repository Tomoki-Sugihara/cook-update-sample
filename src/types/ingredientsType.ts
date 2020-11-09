export type IngredientInfoType = {
   id: string;
   name: string;
   memo?: string;
   unit: string;
   right: boolean; //単位が右か左か
};

export type IngredientType = {
   name: string;
   memo?: string;
   unit: string;
   right: boolean; //単位が右か左か
   amount: number;
   nextAmount: number | null;
   moderation: number; //加減
   default: boolean; //加減を変更したかどうか
};
