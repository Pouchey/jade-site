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

export const StyledDesc = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const StyledIconContainer = styled.div`
  cursor: pointer;
`;
