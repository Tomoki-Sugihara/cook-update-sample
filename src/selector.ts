import { createSelector } from 'reselect';
import { RootState } from './index';
const recipeSelector = ((state: RootState) => state.recipes)
const recipeInfoSelector = ((state: RootState) => state.recipeInfo)
const ingredientSelector = ((state: RootState) => state.ingredients)
export const getRecipes = createSelector([recipeSelector], state => state)
export const getLatestRecipeInfo = createSelector([recipeInfoSelector], state => state[0])

const configSelector = (state: RootState) => state.config;
// const configSelector = useSelector((state: RootState) => state.config)
export const getBottomNavNum = createSelector([configSelector], state => state.bottomNavNum)