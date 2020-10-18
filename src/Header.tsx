import { AppBar, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Header = () => {
   return (
      <Root>
         {/* <AppBar position="fixed"> */}
         <h3>料理名</h3>
         {/* </AppBar> */}
      </Root>
   );
};

const Root = styled.div`
   position: fixed;
   top: 0;
   z-index: 20;
   display: flex;
   margin: 0;
   height: 50px;
   width: 100vw;
   h3 {
      margin: auto 0;
   }
`;

export default Header;
