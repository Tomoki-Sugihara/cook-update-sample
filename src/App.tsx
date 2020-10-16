import React, { FC } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import CookList from './RecipeList';
// import CreateRecipe from './CreateRecipe';

const App: FC = () => {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<CookList />} />
               {/* <Route path="/create" element={<CreateRecipe />} /> */}
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
