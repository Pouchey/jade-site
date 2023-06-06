import React from 'react';

import Icon from '_components/icon';

import { StyledImageWrapper } from './style';
import { ImageProps } from './types';

const Image = React.memo(({ url, alt, size = 16 }: ImageProps) => {
  if (!url || !alt) return <Icon glyph="noImage" size={size} color="green1" />;

  return (
    <StyledImageWrapper size={size}>
      <img src={url} alt={alt} />
    </StyledImageWrapper>
  );
});

export default Image;
