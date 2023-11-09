import styled from 'styled-components';

export const StyledSongItemList = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.color.white};
  border-top: 1px solid ${({ theme }) => theme.color.green1};
`;
