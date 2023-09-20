import styled from 'styled-components';

export interface StyledCloseProps {
  size?: number;
}

export const StyledClose = styled.div<StyledCloseProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (size ? `${size}px` : '24px')};
  height: ${({ size }) => (size ? `${size}px` : '24px')};
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: rotate(180deg);
  }
`;
