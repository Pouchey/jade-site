import styled from 'styled-components';

export interface StyledImageProps {
  size: number;
}

export const StyledImageWrapper = styled.div.attrs<{
  iconSize?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}>(({ size }: any) => ({
  iconSize: size ? `${size}px` : '32px',
}))<StyledImageProps>`
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
