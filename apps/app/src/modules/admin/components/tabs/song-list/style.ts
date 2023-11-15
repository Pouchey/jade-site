import styled from 'styled-components';

import { StyledArtist } from '_modules/song/components/common/artist/style';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  overflow: scroll;
  background: ${({ theme }) => theme.color.green1};
  border-radius: 8px;

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    grid-row: 1;
    overflow: scroll;
  }
`;

export const StyledSongItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
  border-top: 1px solid ${({ theme }) => theme.color.green1};
  border-radius: 8px;
`;

export const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 8px;
  width: 100%;
  height: 100%;

  ${StyledArtist} {
    align-self: flex-end;
    text-align: end;
  }
`;
