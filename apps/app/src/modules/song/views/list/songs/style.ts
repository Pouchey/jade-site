import styled from 'styled-components';

import { StyledArtist } from '_modules/song/components/common/artist/style';

export const StyledSongItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.color.white};
  border-bottom: 1px solid ${({ theme }) => theme.color.green1};

  > :last-child {
    > div {
      border-bottom: none;
    }
  }
`;

export const StyledDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  height: 100%;

  ${StyledArtist} {
    align-self: flex-end;
    text-align: end;
  }
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
