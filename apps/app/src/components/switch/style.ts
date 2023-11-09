import styled from 'styled-components';

export interface StyledSwitchProps {
  checked: boolean;
}

export const StyledSwitch = styled.div<StyledSwitchProps>`
  position: relative;
  display: flex;
  align-items: center;
  width: 48px;
  height: 24px;
  appearance: none;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.beige1};
  border-radius: 12px;
  outline: none;
  transition: all 200ms;

  input {
    width: 0;
    height: 0;
    cursor: pointer;
  }

  ::after {
    position: absolute;
    bottom: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    content: '';
    background-color: ${({ theme }) => theme.color.green1};
    border-radius: 50%;
    transition: all 0.4s;
  }

  ${({ checked, theme }) =>
    checked &&
    `
        background-color: ${theme.color.green2};

        ::after{
          left:25px;
        }
    `};
`;
