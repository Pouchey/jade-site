import React from 'react';

import Icon from '_components/icon';

import { useMenuContext } from '_modules/ui/hooks/useContext';

import { StyledTitle } from '_style/common';

import Link from './Link';
import { StyledLogoWrapper, StyledMenu, StyledMenuWrapper } from './style';

const MenuContent = React.memo(() => {
  const { state } = useMenuContext();

  const isMenuOpened = state?.isMenuOpened;

  return (
    <StyledMenuWrapper $isMenuOpened={isMenuOpened}>
      <StyledMenu>
        <Link label="Home" to="/" />
        <Link label="Songlist" to="/songlist" />
        <Link label="Donation" to="/donate" />
        <Link label="Admin Panel" to="/admin" />
        <StyledLogoWrapper>
          <Icon glyph="guitare" size={300} color="white" />
          <StyledTitle>Jade Rowley</StyledTitle>
        </StyledLogoWrapper>
      </StyledMenu>
    </StyledMenuWrapper>
  );
});

export default MenuContent;
