import styled, { css } from 'styled-components';

export interface StyledProps {
  $hide?: boolean;
}

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    grid-template-rows: max-content 1fr;
    grid-template-columns: 1fr;
    overflow: scroll;
  }
`;

export const StyledComponentContainer = styled.div<StyledProps>`
  height: 100%;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    ${({ $hide }) =>
      $hide &&
      css`
        display: none;
      `}
  }
`;
