import { darken } from 'polished';
import styled, { css } from 'styled-components';

import { ButtonProps } from './types';

export const StyledButton = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ theme, size }) => theme.size[size || 'normal']};
  color: #fff;
  font-weight: ${({ theme }) => theme.weight.medium};
  font-size: ${({ theme, size }) => theme.size[size || 'normal']};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${({ color, theme }) => {
    switch (color) {
      case 'primary':
        return css`
          background-color: ${theme.color.green1};
          &:hover {
            background-color: ${darken(0.1, theme.color.green1)};
          }
          &:active {
            background-color: ${darken(0.2, theme.color.green1)};
          }
        `;
      default:
      case 'secondary':
        return css`
          background-color: ${theme.color.green2};
          &:hover {
            background-color: ${darken(0.1, theme.color.green2)};
          }
          &:active {
            background-color: ${darken(0.2, theme.color.green2)};
          }
        `;
    }
  }}
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;
