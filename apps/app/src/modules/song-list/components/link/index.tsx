import React from 'react';

import Icon from '_components/icon';

import { useSongListContext } from '_modules/song-list/hooks/useContext';

import { ESongListType } from '_shared/song/types';

import { StyledLink } from './style';

interface Props {
  glyph: string;
  value: ESongListType;
}

const TabLink = React.memo(({ glyph, value }: Props) => {
  const { dispatch } = useSongListContext();

  const handleClick = () => {
    dispatch({
      type: 'setType',
      payload: {
        type: value,
      },
    });
  };

  return (
    <StyledLink onClick={handleClick}>
      <Icon glyph={glyph} size={28} color="white" />
    </StyledLink>
  );
});

export default TabLink;
