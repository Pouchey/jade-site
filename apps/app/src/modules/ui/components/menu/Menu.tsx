import React from 'react';

import Icon from '_components/icon';

import { useMenuContext } from '_modules/ui/hooks/useContext';

import { StyledTitle } from '_style/common';

import {
  StyledLink,
  StyledLogoWrapper,
  StyledMenu,
  StyledMenuWrapper,
} from './style';

const MenuContent = React.memo(() => {
  const { state } = useMenuContext();

  const isMenuOpened = state?.isMenuOpened;

  return (
    <StyledMenuWrapper $isMenuOpened={isMenuOpened}>
      <StyledMenu>
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
    </StyledMenuWrapper>
  );
});

export default MenuContent;
