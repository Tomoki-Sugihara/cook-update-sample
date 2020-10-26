import { useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { RootState } from './index';
// const recipeSelector = useSelector(state => state)
// export const getRecipes = createSelector([recipeSelector], state => state)

const configSelector = (state: RootState) => state.config;
// const configSelector = useSelector((state: RootState) => state.config)
export const getBottomNavNum = createSelector([configSelector], state => state.bottomNavNum)