import styled from 'styled-components';

export const StyledContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  width: 100%;
  height: 100%;
  max-height: 88vh;
  padding: 10px;
  background: ${({ theme }) => theme.color.green1};
  border-radius: 8px;
`;

export const StyledSongItemList = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
  border-top: 1px solid ${({ theme }) => theme.color.green1};
  border-radius: 8px;
`;
