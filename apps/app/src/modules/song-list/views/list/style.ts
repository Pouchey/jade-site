import styled from 'styled-components';

export const StyledSongList = styled.div`
  display: grid;
  grid-template-rows: 1fr 80px 74px;
  max-height: 100%;
  overflow: hidden;
`;

export const StyledSongItemList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
`;
