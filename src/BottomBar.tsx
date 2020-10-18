import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { AccountCircle, Favorite, ImportContacts } from '@material-ui/icons';
import React, { FC } from 'react';
import styled from 'styled-components';

const BottomBar: FC = () => {
   const [value, setValue] = React.useState(0);
   return (
      <Root>
         <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
               setValue(newValue);
            }}
            showLabels
            className="bottomNavi"
         >
            <BottomNavigationAction label="Recipe" icon={<ImportContacts />} />
            <BottomNavigationAction label="Favorites" icon={<Favorite />} />
            <BottomNavigationAction label="Mypage" icon={<AccountCircle />} />
         </BottomNavigation>
      </Root>
   );
};

const Root = styled.div`
   position: fixed;
   height: 56px;
   width: 100vw;
   bottom: 0;
   z-index: 20;
   .bottomNavi {
   }
`;

export default BottomBar;
