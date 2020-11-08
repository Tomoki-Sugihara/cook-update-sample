import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import RecipeItem from './RecipeItem';
import { RecipeState } from '../../reducers/recipes';

const RecipeList: FC = () => {
   const recipes = useSelector(state => state.recipes);
   // const navigate = useNavigate();
   return (
      <div>
         {recipes.map((recipe: RecipeState, index) => (
            <RecipeItem {...recipe} key={index} />
         ))}
      </div>
   );
};

export default RecipeList;
