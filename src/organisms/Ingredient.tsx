import { TableCell, TableRow } from '@material-ui/core';
import React, { FC } from 'react';
import { IngredientState } from '../pages/list/RecipeItem';
import ReviewTableBody from '../components/ReviewTableBody';
import { getModerationString } from '../utils/helper';

type IngredientProps = IngredientState & {
   status?: 'normal' | 'cooking' | 'reviewing';
};

const Ingredient: FC<IngredientProps> = props => {
   const degree = getModerationString(props.moderation);
   if (props.status === 'normal') {
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
   } else if (props.status === 'cooking') {
      return (
         <TableRow>
            <TableCell>{props.name}</TableCell>
            {props.right ? (
               <TableCell align="center">
                  <p>
                     {props.amount}
                     {props.unit}
                  </p>
               </TableCell>
            ) : (
               <TableCell align="center">
                  <p>
                     {props.unit}
                     {props.amount}
                  </p>
               </TableCell>
            )}
            {props.right ? (
               <TableCell align="right">
                  {props.amount * props.moderation}
                  {props.unit}
               </TableCell>
            ) : (
               <TableCell align="right">
                  {props.unit}
                  {props.amount * props.moderation}
               </TableCell>
            )}
         </TableRow>
      );
      // } else if (props.status === 'reviewing') {
      //    return (<ReviewTableBody {...props} />)
   } else {
      return <div>error</div>;
   }
};
export default Ingredient;
