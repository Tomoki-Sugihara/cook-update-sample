import React from 'react';
import { useSelector } from 'react-redux';
import CookItem from './CookItem';
import { RootState } from './index';
import { RecipeState } from './reducers/recipes';

const CookList = () => {
   const recipes = useSelector((state: RootState) => state.recipes);
   return (
      <div>
         {recipes.map((recipe: RecipeState, index) => (
            <CookItem {...recipe} key={index} />
         ))}
      </div>
   );
};

export default CookList;
