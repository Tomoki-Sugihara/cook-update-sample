import React, { FC, useState } from 'react';
import {
   Box,
   Collapse,
   IconButton,
   Radio,
   RadioGroup,
   TableCell,
   TableRow,
} from '@material-ui/core';
import { KeyboardArrowUp, KeyboardArrowDown } from '@material-ui/icons';
import { getModerationString } from '../utils/helper';
import styled from 'styled-components';
import { getIngredientInfo } from '../selector';
import { IngredientDataType } from '../types/recipesType';
import { IngredientType } from '../types/ingredientsType';
import { useSelector } from 'react-redux';

type ReviewTableBodyProps = IngredientDataType & {
   index: number;
   openNum: number | null;
   inputOpenNum: (number: number | null) => void;
};

const ReviewTableBody: FC<ReviewTableBodyProps> = props => {
   const selector = useSelector(state => state);
   const ingredientInfo = getIngredientInfo(selector, props.ingredientId);
   const ingredient = ({
      ...ingredientInfo,
      ...props,
   } as unknown) as IngredientType;
   const open = props.index === props.openNum;
   const [value, setValue] = useState(1);

   const handleClickOpenButton = () => {
      props.inputOpenNum(open ? null : props.index);
   };

   const handleChangeRadio = (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(Number(event.target.value));
      if (props.openNum !== null) {
         props.inputOpenNum(props.openNum + 1);
      }
   };
   return (
      <>
         <TableRow>
            <TableCell padding="none">
               <IconButton
                  aria-label="expand row"
                  size="small"
                  // onClick={() => props.setOpenNum(props.index)}
                  onClick={handleClickOpenButton}
                  // onClick={() => setOpen(!open)}
               >
                  {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
               </IconButton>
            </TableCell>
            <TableCell onClick={handleClickOpenButton}>
               {ingredient.name}
            </TableCell>
            {ingredient.right ? (
               <TableCell align="right">
                  <p>
                     {ingredient.amount}
                     {ingredient.unit}
                  </p>
               </TableCell>
            ) : (
               <TableCell align="right">
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
         <TableRow>
            <TableCell style={{ padding: 0 }} colSpan={6}>
               <Collapse in={open} timeout="auto" unmountOnExit>
                  <Box margin={1}>
                     <CollapseWrapper>
                        <div className="moderation spaceBetweenBox">
                           <div>少ない</div>
                           <div>多い</div>
                        </div>
                        <RadioGroup
                           value={value}
                           onChange={handleChangeRadio}
                           className="radioGroup"
                           style={{ display: 'flex', flexDirection: 'row' }}
                        >
                           <div>
                              <Radio color="default" value={1.5} />
                              <Radio color="default" value={1.2} />
                              <Radio color="default" value={1.1} />
                              <Radio color="default" value={1} />
                              <Radio color="default" value={0.9} />
                              <Radio color="default" value={0.8} />
                              <Radio color="default" value={0.5} />
                           </div>
                        </RadioGroup>
                        {/* <div className="spaceBetweenBox">
                           <div></div>
                           <div>{getModerationString(value)}</div>
                           <div className="spaceBetweenBox">
                              <div>次回</div>
                              <div>{ingredient.amount * value}</div>
                           </div>
                        </div> */}
                     </CollapseWrapper>
                  </Box>
               </Collapse>
            </TableCell>
         </TableRow>
      </>
   );
};

const CollapseWrapper = styled.div`
   .moderation {
   }
   .spaceBetweenBox {
      margin: 0 5%;
      display: flex;
      justify-content: space-between;
   }
   .radioGroup {
      display: flex;
      flex-direction: row;

      > div {
         margin: 0 auto;
      }
   }
`;

export default ReviewTableBody;
