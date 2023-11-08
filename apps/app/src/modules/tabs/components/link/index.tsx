import React from 'react';

import Icon from '_components/icon';

import { useTabsContext } from '_modules/tabs/hooks/useContext';

import { StyledLink } from './style';

interface Props {
  glyph: string;
  value: string;
}

const TabLink = React.memo(({ glyph, value }: Props) => {
  const { dispatch } = useTabsContext();

  const handleClick = () => {
    dispatch({
      type: 'setTab',
      payload: value,
    });
  };

  return (
    <StyledLink onClick={handleClick}>
      <Icon glyph={glyph} size={28} color="white" />
    </StyledLink>
  );
});

export default TabLink;
