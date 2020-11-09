import { TableCell, TableRow } from '@material-ui/core';
import React, { FC } from 'react';
import { getModerationString } from '../utils/helper';
import { IngredientDataType } from '../types/recipesType';
import { IngredientType } from '../types/ingredientsType';
import { getIngredientInfo } from '../selector';
import { useSelector } from 'react-redux';

type IngredientProps = IngredientDataType & {
   status?: 'normal' | 'cooking' | 'reviewing';
};

const Ingredient: FC<IngredientProps> = props => {
   const selector = useSelector(state => state);
   const ingredientInfo = getIngredientInfo(selector, props.ingredientId);
   const ingredient = ({
      ...ingredientInfo,
      ...props,
   } as unknown) as IngredientType;

   const degree = getModerationString(ingredient.moderation);
   if (props.status === 'normal') {
      return (
         <TableRow>
            <TableCell>{ingredient.name}</TableCell>
            {ingredient.right ? (
               <TableCell align="right">
                  {ingredient.amount}
                  {ingredient.unit}
               </TableCell>
            ) : (
               <TableCell align="right">
                  {ingredient.unit}
                  {ingredient.amount}
               </TableCell>
            )}
            <TableCell align="right">{degree}</TableCell>
         </TableRow>
      );
   } else if (props.status === 'cooking') {
      return (
         <TableRow>
            <TableCell>{ingredient.name}</TableCell>
            {ingredient.right ? (
               <TableCell align="center">
                  <p>
                     {ingredient.amount}
                     {ingredient.unit}
                  </p>
               </TableCell>
            ) : (
               <TableCell align="center">
                  <p>
                     {ingredient.unit}
                     {ingredient.amount}
                  </p>
               </TableCell>
            )}
            {ingredient.right ? (
               <TableCell align="right">
                  {ingredient.amount * ingredient.moderation}
                  {ingredient.unit}
               </TableCell>
            ) : (
               <TableCell align="right">
                  {ingredient.unit}
                  {ingredient.amount * ingredient.moderation}
               </TableCell>
            )}
         </TableRow>
      );
      // } else if (ingredient.status === 'reviewing') {
      //    return (<ReviewTableBody {...ingredient} />)
   } else {
      return <div>error</div>;
   }
};
export default Ingredient;
