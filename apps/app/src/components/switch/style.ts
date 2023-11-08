import styled from 'styled-components';

export interface StyledSwitchProps {
  $checked: boolean;
}

export const StyledSwitchContainer = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

export const StyledSwitch = styled.div`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

export const StyledSlider = styled.span<StyledSwitchProps>`
  position: absolute;
  inset: 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.beige1};
  border-radius: 24px;
  transition: 0.4s;

  &::before {
    position: absolute;
    bottom: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    content: '';
    background-color: ${({ theme }) => theme.color.green1};
    border-radius: 50%;
    transition: 0.4s;

    ${({ $checked }) =>
      $checked &&
      `
                -webkit-transform: translateX(22px);
                -ms-transform: translateX(22px);
                transform: translateX(22px);
            `};
  }

  ${({ $checked, theme }) =>
    $checked &&
    `
            background-color: ${theme.color.green2};
        `};

  &:focus {
    box-shadow: 0 0 1px ${({ theme }) => theme.color.green2};
  }
`;

export const StyledCheckbox = styled.input`
  width: 0;
  height: 0;
  opacity: 0;
`;
