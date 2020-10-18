import React, { FC } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import BottomBar from './BottomBar';
import Header from './Header';
import CookList from './RecipeList';
// import CreateRecipe from './CreateRecipe';

const App: FC = () => {
   return (
      <>
         <Header />
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<CookList />} />
               {/* <Route path="/create" element={<CreateRecipe />} /> */}
            </Routes>
         </BrowserRouter>
         <BottomBar />
      </>
   );
};

export default App;
