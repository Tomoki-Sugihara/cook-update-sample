import {
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Header from './Header';
import { RootState } from './index';
import Ingredient from './Ingredient';
import { RecipeState } from './reducers/recipes';
import { Info } from './RecipeItem';
import { useNavigate } from 'react-router-dom';

const Review = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const recipes = useSelector((state: RootState) => state.recipes);
   const currentRecipe = recipes.find(recipe => recipe.id === id);
   const latestInfo = currentRecipe && currentRecipe.dairyInformation[0];

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
                        <TableCell align="center">今回</TableCell>
                        <TableCell align="right">次回</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {latestInfo.ingredients.map(ingredient => (
                        <Ingredient
                           {...ingredient}
                           key={ingredient.id}
                           status="reviewing"
                        />
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
            {/* {currentRecipe.dairyInformation.map((info: Info, index) => {
               if (info.memo) {
                  const date = `${
                     info.created_at.getMonth() + 1
                  }月${info.created_at.getDate()}日`;
                  return (
                     <div key={index} className="flexContainer">
                        <div>{info.memo}</div>
                        <div className="right">{date}</div>
                     </div>
                  );
               }
            })} */}
            {/* <div style={{ display: 'flex' }}>
               {latestInfo.images &&
                  latestInfo.images.length > 0 &&
                  latestInfo.images.map((imgPath: string, index) => (
                     <div className="imageContainer" key={index}>
                        <img src={imgPath} alt="" />
                     </div>
                  ))}
            </div> */}
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
