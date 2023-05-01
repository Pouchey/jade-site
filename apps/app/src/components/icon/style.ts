import styled from 'styled-components';

import { SvgProps } from './types';

export const StyledSvgWrapper = styled.div.attrs(({ size }: SvgProps) => ({
  iconSize: size ? `${size}px` : '32px',
}))<SvgProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ iconSize }) => iconSize};
  height: ${({ iconSize }) => iconSize};

  svg {
    width: ${({ iconSize }) => iconSize};
    height: ${({ iconSize }) => iconSize};
    fill: ${({ theme, color }) => theme.color[color]};
  }
`;
