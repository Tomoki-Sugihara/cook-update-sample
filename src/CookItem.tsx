import React, { useState } from 'react';
import { RecipeState } from './reducers/recipes';

export type Ingredient = {
   name: string;
   amount: number;
   unit: string;
};
const CookItem = (props: RecipeState) => {
   const [name, setName] = useState(props.name);
   const [memo, setMemo] = useState(props.memo);
   const [ingredients, setIngredients] = useState<Ingredient[]>(
      props.ingredients
   );

   return (
      <div>
         <div>{name}</div>
         <div>{memo}</div>
         <div>
            {ingredients.length &&
               ingredients.map((ingredient: Ingredient, index) => (
                  <div key={index}>
                     <ul>
                        <li>{ingredient.name}</li>
                        <li>
                           {ingredient.amount}
                           {ingredient.unit}
                        </li>
                     </ul>
                  </div>
               ))}
         </div>
      </div>
   );
};

export default CookItem;
