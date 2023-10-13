import styled from 'styled-components';

export interface StyledImageProps {
  $size: number;
}

export const StyledImageWrapper = styled.div.attrs<
  StyledImageProps & { $iconSize?: string },
  StyledImageProps & { $iconSize: string }
>(({ $size }: StyledImageProps) => ({
  $iconSize: $size ? `${$size}px` : '32px',
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $iconSize }) => $iconSize};
  height: ${({ $iconSize }) => $iconSize};

  img {
    width: ${({ $iconSize }) => $iconSize};
    height: ${({ $iconSize }) => $iconSize};
  }
`;
