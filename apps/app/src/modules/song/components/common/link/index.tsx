import React from 'react';

import Icon from '_components/icon';

import { useSongContext } from '_modules/song/hooks/useContext';

import { ESongListType } from '_shared/song/types';

import { StyledLink, StyledLinkContainer } from './style';

interface Props {
  glyph: string;
  value: ESongListType;
}

const TabLink = React.memo(({ glyph, value }: Props) => {
  const { dispatch } = useSongContext();

  const handleClick = () => {
    dispatch({
      type: 'setType',
      payload: {
        type: value,
      },
    });
  };

  return (
    <StyledLinkContainer onClick={handleClick}>
      <StyledLink>
        <Icon glyph={glyph} size={28} color="white" />
      </StyledLink>
    </StyledLinkContainer>
  );
});

export default TabLink;
