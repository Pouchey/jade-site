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

  &::before,
  &::after {
    position: absolute;
    width: 100%;
    height: 2px;
    content: '';
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 8px;
    transition: transform 0.2s ease-in-out, width 0.2s ease-in-out 0.2s;
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

  &.opened {
    ${StyledLines} {
      transition: transform 0.2s ease-in-out 0.2s;
      transform: rotate(135deg);

      &::before {
        transform: rotate(90deg) scaleX(0.3) translateX(-10px);
      }

      &::after {
        transform: rotate(90deg) scaleX(0.3) translateX(10px);
      }
    }
  }

  &.closed {
    &:hover,
    &:active {
      ${StyledLines} {
        transition: transform 0.2s ease-in-out;

        &::before,
        &::after {
          width: 50%;
          transition: transform 0.2s ease-in-out 0.2s, width 0.2s ease-in-out;
        }

        &::before {
          transform: rotate(45deg) translateX(4px);
        }

        &::after {
          transform: rotate(-45deg) translateX(4px);
        }
      }
    }
  }
`;
