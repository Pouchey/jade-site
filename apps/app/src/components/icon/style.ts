import styled from 'styled-components';

import { ThemeType } from '_style/theme';

export interface StyledIconProps {
  size?: number;
  color: keyof ThemeType['color'];
}

export const StyledSvgWrapper = styled.div.attrs(
  ({ size }: StyledIconProps) => ({
    iconSize: size ? `${size}px` : '32px',
  })
)<StyledIconProps>`
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
