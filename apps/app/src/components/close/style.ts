import styled from 'styled-components';

import { CloseProps } from './types';

export const StyledClose = styled.div<CloseProps>`
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
