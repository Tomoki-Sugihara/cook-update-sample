import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RecipeItem from './RecipeItem';
import { RootState } from './index';
import { RecipeState } from './reducers/recipes';
import history from 'history';

const RecipeList: FC = () => {
   const recipes = useSelector((state: RootState) => state.recipes);
   // const navigate = useNavigate();
   return (
      <div>
         {recipes.map((recipe: RecipeState, index) => (
            <RecipeItem {...recipe} key={index} />
         ))}
         {/* <Link to={'/create'}>レシピを作成</Link>
         <div onClick={() => navigate('/create', { replace: true })}>
            recipe
         </div> */}
      </div>
   );
};

export default RecipeList;
