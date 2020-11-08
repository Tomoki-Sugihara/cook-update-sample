export type recipesSample = {
   id: number;
   name: string;
   memo: string | null;
   img: string[] | null;
   link: string | null;
   created_at: Date;
   updated_at: Date;
   information: Array<{
      id: number;
      memo: string | null;
      img: string | null;
      created_at: Date;
      updated_at: Date; //?
      ingredients: Array<{
         id: number;
         name: string;
         amount: number;
         unit: string;
         moderation: number; //加減
         default: boolean; //加減を変更したかどうか
         person: number; //何人分
         right: boolean; //単位が右か左か
      }>;
   }>;
};

export type RecipeState = {
   id: string;
   name: string;
   memo?: string | null;
   images?: string[] | null;
   link?: string | null;
   created_at: Date;
   updated_at: Date;
   dairyInformation: Array<{
      id: string;
      memo?: string | null;
      images?: string[] | null;
      person: number; //何人分
      created_at: Date;
      updated_at: Date; //?
      ingredients: Array<{
         id: string;
         name: string;
         memo?: string;
         amount: number;
         nextAmount: number | null;
         unit: string;
         moderation: number; //加減
         default: boolean; //加減を変更したかどうか
         right: boolean; //単位が右か左か
      }>;
   }>;
};
