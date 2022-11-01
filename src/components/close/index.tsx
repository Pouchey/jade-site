import React from 'react';

import Icon from '_components/icon';

import { StyledClose } from './style';
import { CloseProps } from './types';

export default React.memo(({ onClick, size = 24 }: CloseProps) => {
  return (
    <StyledClose onClick={onClick}>
      <Icon glyph="close" size={size} color="white" />
    </StyledClose>
  );
});
