import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import {
   AccountCircle,
   Favorite,
   ImportContacts,
   LocalDining,
} from '@material-ui/icons';
import React, { FC } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBottomNavNum } from '../selector';
import { RootState } from '../index';
import { transitPage } from '../reducers/config';

const BottomBar: FC = () => {
   const dispatch = useDispatch();
   const selector = useSelector<RootState, RootState>(state => state);
   const bottomNavNum = getBottomNavNum(selector);
   const navigate = useNavigate();
   return (
      <Root>
         <BottomNavigation
            value={bottomNavNum}
            // value={value}
            onChange={(event, newValue) => {
               // setValue(newValue);
               dispatch(transitPage(newValue));
            }}
            showLabels
            className="bottomNavi"
         >
            <BottomNavigationAction
               label="Recipe"
               icon={<ImportContacts />}
               onClick={() => navigate('/')}
            />
            <BottomNavigationAction
               label="Cook"
               icon={<LocalDining />}
               onClick={() => navigate('/cook')}
            />
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
