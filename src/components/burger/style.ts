import styled from 'styled-components';

import { BurgerProps } from './types';

export const StyledLines = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 2px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  transition: all 0.3s ease-in-out;

  &::before,
  &::after {
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    transition: all 0.3s ease-in-out;
    content: '';
  }

  &::before {
    top: -8px;
  }

  &::after {
    bottom: -8px;
  }
`;

export const StyledBurger = styled.div<BurgerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => (size ? `${size}px` : '24px')};
  height: ${({ size }) => (size ? `${size}px` : '24px')};
  cursor: pointer;

  &:hover,
  &:active {
    ${StyledLines} {
      &::before,
      &::after {
        width: 50%;
      }

      &::before {
        transform: rotate(45deg) translate(2px, 1px);
      }

      &::after {
        transform: rotate(-45deg) translate(2px, -1px);
      }
    }
  }
`;
