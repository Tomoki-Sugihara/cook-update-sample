import { TableCell, TableRow } from '@material-ui/core';
import React, { FC } from 'react';
import { IngredientProps } from './RecipeItem';

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
      <TableRow>
         <TableCell>{props.name}</TableCell>
         {props.right ? (
            <TableCell align="right">
               {props.amount}
               {props.unit}
            </TableCell>
         ) : (
            <TableCell align="right">
               {props.unit}
               {props.amount}
            </TableCell>
         )}
         <TableCell align="right">{degree}</TableCell>
      </TableRow>
   );
};

export default Ingredient;
