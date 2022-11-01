import React from 'react';

import Burger from '_components/burger';

import { useMenuContext } from '_modules/ui/hooks/useContext';
import { StyledTitle } from '_style/common';



import { StyledTopBar, StyledBurgerWrapper } from './style';

export default React.memo(() => {
  const { dispatch } = useMenuContext();

  const openMenu = () => {
    dispatch({ type: 'openMenu' });
  };

  return (
    <StyledTopBar>
      <StyledBurgerWrapper>
        <Burger onClick={openMenu} />
      </StyledBurgerWrapper>
      <StyledTitle>Jade Rowley</StyledTitle>
    </StyledTopBar>
  );
});
