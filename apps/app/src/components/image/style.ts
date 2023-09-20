import styled from 'styled-components';

export interface StyledImageProps {
  size?: number;
}

export const StyledImageWrapper = styled.div.attrs(
  ({ size }: StyledImageProps) => ({
    iconSize: size ? `${size}px` : '16px',
  })
)<StyledImageProps>`
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
