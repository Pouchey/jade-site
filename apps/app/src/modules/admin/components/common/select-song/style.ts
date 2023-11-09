import styled from 'styled-components';

import {
  StyledCountWrapper,
  StyledSongItemWrapper,
} from '_modules/song/components/song/style';

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

  ${StyledSongItemWrapper} {
    cursor: pointer;
  }

  ${StyledCountWrapper} {
    display: none;
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
