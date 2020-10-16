import React, { FC } from 'react';
import { Ingredient as IngredientProps } from './RecipeItem';

const Ingredient: FC<IngredientProps> = props => {
   let degree: string;

   if (props.moderation === 1) {
      degree = 'good';
   } else if (props.moderation < 0.5) {
      degree = 'かなり多い';
   } else if (props.moderation < 0.8) {
      degree = '多い';
   } else if (props.moderation < 1) {
      degree = '少し多い';
   } else if (props.moderation <= 1.2) {
      degree = '少し少ない';
   } else if (props.moderation <= 1.5) {
      degree = '少ない';
   } else {
      degree = 'かなり少ない';
   }
   return (
      <div>
         <div style={{ display: 'flex' }}>
            <li>{props.name}</li>
            {props.right ? (
               <li>
                  {props.amount}
                  {props.unit}
               </li>
            ) : (
               <li>
                  {props.unit}
                  {props.amount}
               </li>
            )}

            <li>{degree}</li>
            {/* <Slider
            defaultValue={0}
            min={-100}
            max={100}
            step={25}
         ></Slider> */}
         </div>
      </div>
   );
};

export default Ingredient;
