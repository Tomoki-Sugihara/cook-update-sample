import { DefaultRootState } from 'react-redux';
import { createSelector } from 'reselect';
import { IngredientInfoType } from './types/ingredientsType';
const recipeSelector = (state: DefaultRootState) => state.recipes;
export const getRecipes = createSelector([recipeSelector], state => state);
export const getLatestRecipeInfo = createSelector(
   [recipeSelector],
   state => state[0].recipeInfo[state[0].recipeInfo.length - 1]
);

const ingredientSelector = (state: DefaultRootState) => state.ingredients;

// export const getIngredientInfo = (id: string) => {
//    return createSelector([ingredientSelector], state =>
//       state.find(elem => elem.id === id)
//    );
// };
export const getIngredientInfo = (state: DefaultRootState, id: string) => {
   return createSelector([ingredientSelector], ingredients =>
      ingredients.find(elem => elem.id === id)
   )(state);
};

const configSelector = (state: DefaultRootState) => state.config;
// const configSelector = useSelector((state: RootState) => state.config)
export const getBottomNavNum = createSelector(
   [configSelector],
   state => state.bottomNavNum
);
