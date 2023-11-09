import styled from 'styled-components';

import { StyledSvgWrapper } from '_components/icon/style';
import { StyledLoaderWrapper } from '_components/loader/style';

export const StyledSearch = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;

  > input {
    width: 100%;
    height: 40px;
    padding: 8px 64px 8px 16px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    outline: none;
  }

  ${StyledSvgWrapper} {
    position: absolute;
    top: 8px;
    right: 16px;
    cursor: pointer;
  }

  ${StyledLoaderWrapper} {
    position: absolute;
    right: 16px;
    width: auto;
  }
`;
