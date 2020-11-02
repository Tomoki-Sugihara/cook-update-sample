import React, { FC } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import BottomBar from './BottomBar';
import Cook from './Cook';
import CreateRecipe from './CreateRecipe';
import styled from 'styled-components';
import Review from './Review';
import CookList from './RecipeList';
// import CreateRecipe from './CreateRecipe';

const App: FC = () => {
   return (
      <>
         <BrowserRouter>
            <GlobalStyle>
               <Routes>
                  <Route path="/" element={<CookList />} />
                  <Route path="/create/" element={<CreateRecipe />} />
                  <Route path="/cook/:id" element={<Cook />} />
                  <Route path="/review/:id" element={<Review />} />
               </Routes>
            </GlobalStyle>
            <BottomBar />
         </BrowserRouter>
      </>
   );
};

const GlobalStyle = styled.div``;

export default App;
