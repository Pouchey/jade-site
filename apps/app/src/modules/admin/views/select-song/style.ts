import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.color.green1};
  border-radius: 8px;
`;

export const StyledSongItemList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  border-top: 1px solid ${({ theme }) => theme.color.green1};
`;
