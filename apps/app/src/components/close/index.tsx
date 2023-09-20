import React from 'react';

import Icon from '_components/icon';

import { StyledClose } from './style';

interface Props {
  onClick: () => void;
  size?: number;
}

const Close = React.memo(({ onClick, size = 24 }: Props) => {
  return (
    <StyledClose onClick={onClick}>
      <Icon glyph="close" size={size} color="white" />
    </StyledClose>
  );
});

export default Close;
