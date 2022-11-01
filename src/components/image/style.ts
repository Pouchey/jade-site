import styled from 'styled-components';

import { ImageProps } from './types';

export const StyledImageWrapper = styled.div.attrs(({ size }: ImageProps) => ({
  iconSize: size ? `${size}px` : '16px',
}))<ImageProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ iconSize }) => iconSize};
  height: ${({ iconSize }) => iconSize};

  img {
    width: ${({ iconSize }) => iconSize};
    height: ${({ iconSize }) => iconSize};
  }
`;
