import React from 'react';
import { createPortal } from 'react-dom';

import Close from '_components/close';
import Icon from '_components/icon';

import { useMenuContext } from '_modules/ui/hooks/useContext';
import { StyledTitle } from '_style/common';

import {
  StyledCloseWrapper,
  StyledLink,
  StyledLogoWrapper,
  StyledMenu,
} from './style';

const Menu = React.memo(() => {
  const { state, dispatch } = useMenuContext();

  const closeMenu = () => {
    dispatch({ type: 'closeMenu' });
  };

  return (
    <StyledMenu isOpen={state.isMenuOpened}>
      <StyledCloseWrapper>
        <Close onClick={closeMenu} size={32} />
      </StyledCloseWrapper>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/request">Request</StyledLink>
      <StyledLink to="/songlist">Songlist</StyledLink>
      <StyledLink to="/donate">Donation</StyledLink>
      <StyledLink to="/admin">Admin Panel</StyledLink>
      <StyledLogoWrapper>
        <Icon glyph="guitare" size={300} color="white" />
        <StyledTitle>Jade Rowley</StyledTitle>
      </StyledLogoWrapper>
    </StyledMenu>
  );
});

export default React.memo(() => {
  const container = document.getElementById('menu') as HTMLElement;
  return createPortal(<Menu />, container);
});
