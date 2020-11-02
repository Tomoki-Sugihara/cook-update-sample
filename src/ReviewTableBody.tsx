import React, { FC, useState } from 'react';
import { IconButton, Radio, TableCell, TableRow } from '@material-ui/core';
import { IngredientState } from './RecipeItem';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';
const ReviewTableBody: FC<IngredientState> = props => {
   const [open, setOpen] = useState(false);
   const [selectedValue, setSelectedValue] = useState(0);
   return (
      <>
         <TableRow>
            <TableCell padding="none">
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
         <TableRow>
            <div className="flexContainer">
               <Radio />
            </div>
         </TableRow>
      </>
   );
};

export default ReviewTableBody;
