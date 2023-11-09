import styled from 'styled-components';

export const StyledSongItemList = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  border-top: 1px solid ${({ theme }) => theme.color.green1};
  background-color: ${({ theme }) => theme.color.white};
`;
