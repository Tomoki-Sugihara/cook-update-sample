import React, { FC } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import BottomBar from './BottomBar';
import Cook from './Cook';
import CreateRecipe from './CreateRecipe';
import CookList from './RecipeList';
// import CreateRecipe from './CreateRecipe';

const App: FC = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<CookList />} />
               <Route path="/create/" element={<CreateRecipe />} />
               <Route path="/cook/:id" element={<Cook />} />
            </Routes>
            <BottomBar />
         </BrowserRouter>
      </>
   );
};

export default App;
