import { rgba } from 'polished';
import styled, { css } from 'styled-components';

import { ScrollProps } from '../hooks/useScrollShadow';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.beige1};
`;

export const StyledWrapper = styled.div`
  display: grid;
  grid-row-gap: 16px;
  width: 100%;
  padding: 20px;
  padding-bottom: 0;
  overflow: hidden;
`;

export const StyledSongItemList = styled.div<ScrollProps>`
  position: relative;
  display: grid;
  grid-row-gap: 8px;
  overflow-y: scroll;
  border-radius: 8px;

  ::before {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    content: '';
    background: linear-gradient(
      to bottom,
      ${({ theme }) => rgba(theme.color.black, 0.5)},
      ${({ theme }) => rgba(theme.color.black, 0)}
    );
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    ${({ scroll }) =>
      scroll &&
      css`
        opacity: 1;
      `}
  }

  > :last-child {
    margin-bottom: 16px;
  }
`;
