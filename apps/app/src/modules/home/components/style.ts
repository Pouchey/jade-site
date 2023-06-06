import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.beige1};
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  padding: 20px;
`;

export const StyledSongItemList = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: scroll;
  border-top: 1px solid ${({ theme }) => theme.color.green1};
`;
