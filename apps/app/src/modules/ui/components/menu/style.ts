import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface StyledMenuProps {
  $isMenuOpened: boolean;
}

export const StyledMenuWrapper = styled.div<StyledMenuProps>`
  width: ${({ theme }) => theme.metrics.menuWidth};
  height: 100vh;
  padding-top: ${({ theme }) => theme.metrics.topbarHeight};
  background-color: ${({ theme }) => theme.color.black};
  box-shadow: 0 0 10px 0 ${({ theme }) => theme.color.black};
  transition: width 0.3s ease-in-out;

  ${({ $isMenuOpened }) =>
    !$isMenuOpened &&
    `
    width: 0;
  `}
`;

export const StyledMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  padding: 8px 24px;
  font-family: 'Ms Madi', cursive;
  font-size: ${({ theme }) => theme.size.diplodocus};
  font-weight: ${({ theme }) => theme.weight.regular};
  line-height: 50px;
  color: ${({ theme }) => theme.color.white};
  text-overflow: hidden;
  white-space: nowrap;
  transition: color 0.3s ease-in-out;

  &::after {
    display: block;
    width: 100%;
    height: 2px;
    content: '';
    background-color: ${({ theme }) => theme.color.green1};
    transition: all 0.3s ease-in-out;
  }

  &:hover::after {
    width: 50%;
  }

  &:hover {
    color: ${({ theme }) => theme.color.green1};
  }
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 32px 0;

  *:last-child {
    margin-top: 16px;
  }
`;
