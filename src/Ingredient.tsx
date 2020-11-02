import { IconButton, TableCell, TableRow } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { IngredientState } from './RecipeItem';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';

type IngredientProps = IngredientState & {
   status?: 'normal' | 'cooking' | 'reviewing';
};

const Ingredient: FC<IngredientProps> = props => {
   let degree: string;

   if (props.moderation === 1) {
      degree = 'Good';
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
   } else if (props.status === 'reviewing') {
      const [open, setOpen] = useState(false);
      return (
         <TableRow>
            <TableCell>
               <IconButton
                  aria-label="expand row"
                  size="small"
                  onClick={() => setOpen(!open)}
               >
                  {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
               </IconButton>
            </TableCell>
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
   } else {
      return <div>error</div>;
   }
};
export default Ingredient;
