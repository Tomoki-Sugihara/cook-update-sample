import React, { FC } from 'react';
import styled from 'styled-components';
type Props = {
   name: string;
};
const Header: FC<Props> = props => {
   return (
      <Root>
         <h3>{props.name}</h3>
      </Root>
   );
};

const Root = styled.div`
   display: flex;
   margin: 0;
   height: 50px;
   width: 100vw;
   h3 {
      margin: auto 0;
   }
`;

export default Header;
