import React from 'react';
import { useNavigate } from 'react-router-dom';

import Burger from '_components/burger';

import { useMenuContext } from '_modules/ui/hooks/useContext';

import { StyledTitle } from '_style/common';

import { StyledTopBar, StyledBurgerWrapper } from './style';

const Topbar = React.memo(() => {
  const navigate = useNavigate();

  const { state, dispatch } = useMenuContext();

  const handleMenu = () =>
    state.isMenuOpened
      ? dispatch({ type: 'closeMenu' })
      : dispatch({ type: 'openMenu' });

  const handleNavigate = () => navigate('/');

  return (
    <StyledTopBar onClick={handleNavigate}>
      <StyledBurgerWrapper>
        <Burger onClick={handleMenu} />
      </StyledBurgerWrapper>
      <StyledTitle>Jade Rowley</StyledTitle>
    </StyledTopBar>
  );
});

export default Topbar;
