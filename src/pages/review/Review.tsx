import {
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Header from '../../organisms/Header';
import { RootState } from '../../index';
import Ingredient from '../../organisms/Ingredient';
import ReviewTableBody from '../../components/ReviewTableBody';

const Review = () => {
   const { id } = useParams();
   const recipes = useSelector((state: RootState) => state.recipes);
   const currentRecipe = recipes.find(recipe => recipe.id === id);
   const latestInfo = currentRecipe && currentRecipe.recipeInfo[0];

   const [openNum, setOpenNum] = useState<number | null>(0);
   const inputOpenNum = useCallback(
      (value: number | null) => {
         setOpenNum(value);
      },
      [setOpenNum]
   );

   if (currentRecipe === undefined) {
      return <div>このレシピは存在しません</div>;
   } else if (latestInfo === undefined) {
      return <div>このレシピで料理した記録がありません</div>;
   }
   return (
      <>
         <Root>
            <Header name={currentRecipe.name} />
            <div>{`${latestInfo.person}人分`}</div>
            <TableContainer component={Paper}>
               <Table>
                  <TableHead>
                     <TableRow>
                        <TableCell padding="none" />
                        {/* <TableCell padding="none" /> */}
                        <TableCell>名称</TableCell>
                        <TableCell align="right">前回</TableCell>
                        <TableCell align="right">今回</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {latestInfo.ingredients.map((ingredient, index) => (
                        <ReviewTableBody
                           {...ingredient}
                           key={ingredient.id}
                           index={index}
                           openNum={openNum}
                           // setOpenNum={setOpenNum}
                           inputOpenNum={inputOpenNum}
                        />
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
         </Root>
      </>
   );
};

const Root = styled.div`
   .flexContainer {
      display: flex;
      .right {
         margin-left: auto;
      }
   }
   .imageContainer > img {
      width: 48vw;
      height: 48vw;
      object-fit: cover;
      /* object-position: center; */
   }
`;

export default Review;
