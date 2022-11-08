import React from 'react';

import Burger from '_components/burger';

import { useMenuContext } from '_modules/ui/hooks/useContext';

import { StyledTitle } from '_style/common';

import { StyledTopBar, StyledBurgerWrapper } from './style';

export default React.memo(() => {
  const { state, dispatch } = useMenuContext();

  const handleMenu = () =>
    state.isMenuOpened
      ? dispatch({ type: 'closeMenu' })
      : dispatch({ type: 'openMenu' });
  return (
    <StyledTopBar>
      <StyledBurgerWrapper>
        <Burger onClick={handleMenu} />
      </StyledBurgerWrapper>
      <StyledTitle>Jade Rowley</StyledTitle>
    </StyledTopBar>
  );
});
