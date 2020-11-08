import { DefaultRootState } from 'react-redux';
import { createSelector } from 'reselect';
// import { RootState } from './index';
const recipeSelector = (state: DefaultRootState) => state.recipes;
export const getRecipes = createSelector([recipeSelector], state => state);
export const getLatestRecipeInfo = createSelector(
   [recipeSelector],
   state => state[0].recipeInfo[0]
);

const ingredientSelector = (state: DefaultRootState) => state.ingredients;

export const getIngredientInfo = (id: string) => {
   return createSelector([ingredientSelector], state =>
      state.find(elem => elem.id === id)
   );
};

const configSelector = (state: DefaultRootState) => state.config;
// const configSelector = useSelector((state: RootState) => state.config)
export const getBottomNavNum = createSelector(
   [configSelector],
   state => state.bottomNavNum
);
