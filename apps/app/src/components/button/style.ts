import { darken } from 'polished';
import styled, { css } from 'styled-components';

import { StyledLoaderWrapper } from '_components/loader/style';

import { ThemeType } from '_style/theme';

export interface StyledButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  $color?: 'primary' | 'secondary';
  $size?: keyof ThemeType['size'];
  $disabled?: boolean;
  $isLoading?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: ${({ theme, $size }) => theme.size[$size || 'normal']};
  font-size: ${({ theme, $size }) => theme.size[$size || 'normal']};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 8px;
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
      cursor: not-allowed;
      opacity: 0.5;
    `}

  ${({ $isLoading, theme }) =>
    $isLoading &&
    css`
      cursor: not-allowed;
      background-color: ${theme.color.green2};

      &:hover {
        background-color: ${theme.color.green2};
      }

      ${StyledLoaderWrapper} {
        position: absolute;
        right: 16px;
        width: auto;
      }
    `}
`;
