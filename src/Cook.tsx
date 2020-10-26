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
import { RootState } from './index';
import Ingredient from './Ingredient';

const Cook = () => {
   const { id } = useParams();
   const recipes = useSelector((state: RootState) => state.recipes);
   const currentRecipe = recipes.find(recipe => recipe.id === id);
   const latestInfo = currentRecipe && currentRecipe.dairyInformation[0];

   return (
      <>
         {latestInfo === undefined ? (
            <div>NoRecipe</div>
         ) : (
            <Root>
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
                              cooking={true}
                           />
                        ))}
                     </TableBody>
                  </Table>
               </TableContainer>
               <div>{latestInfo.memo}</div>
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
         )}
      </>
   );
};

const Root = styled.div`
   margin: 8px;

   .imageContainer > img {
      width: 48vw;
      height: 48vw;
      object-fit: cover;
      /* object-position: center; */
   }
`;

export default Cook;
