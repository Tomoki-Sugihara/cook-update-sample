import {
   Paper,
   Table,
   TableBody,
   TableCell,
   TableContainer,
   TableHead,
   TableRow,
} from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import styled from 'styled-components';
import Header from '../../organisms/Header';
import { RootState } from '../../index';
import Ingredient from '../../organisms/Ingredient';
import { Info } from '../list/RecipeItem';
import { useNavigate } from 'react-router-dom';
import { RecipeState } from '../../reducers/recipes';
import { getLatestRecipeInfo } from '../../selector';

const Cook = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const selector = useSelector<RootState, RootState>(state => state);
   const recipes: RecipeState[] = useSelector(
      (state: RootState) => state.recipes
   );
   const currentRecipe: RecipeState = recipes.find(
      recipe => recipe.id === id
   ) as RecipeState;
   // const latestInfo = currentRecipe.recipeInfo[0];
   const latestInfo = getLatestRecipeInfo(selector);

   if (currentRecipe === undefined) {
      return <div>このレシピは存在しません</div>;
   } else if (latestInfo === undefined) {
      return <div>このレシピで料理した記録がありません</div>;
   }
   const handleClickReview = () => {
      navigate(`/review/${currentRecipe.id}`);
   };
   return (
      <>
         <Root>
            <Header name={currentRecipe.name} />
            <div>{currentRecipe.memo}</div>
            <div onClick={handleClickReview}>作った！</div>
            <div>{`${latestInfo.person}人分`}</div>
            <TableContainer component={Paper}>
               <Table>
                  <TableHead>
                     <TableRow>
                        <TableCell>名称</TableCell>
                        <TableCell align="center">前回</TableCell>
                        <TableCell align="right">推奨量</TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {latestInfo.ingredients.map(ingredient => (
                        <Ingredient
                           {...ingredient}
                           key={ingredient.id}
                           status="cooking"
                        />
                     ))}
                  </TableBody>
               </Table>
            </TableContainer>
            {currentRecipe.recipeInfo.map((info: Info, index) => {
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
            })}
            <div style={{ display: 'flex' }}>
               {latestInfo.images &&
                  latestInfo.images.length > 0 &&
                  latestInfo.images.map((imgPath: string, index) => (
                     <div className="imageContainer" key={index}>
                        <img src={imgPath} alt="" />
                     </div>
                  ))}
            </div>
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

export default Cook;
