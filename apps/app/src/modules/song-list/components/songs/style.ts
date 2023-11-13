import styled from 'styled-components';

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
