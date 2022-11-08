import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-areas: 'left right ';
  grid-template-columns: 1fr 1fr;
  width: 100vw;
  height: 100vh;
`;

export const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: left;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.green1};

  *:last-child {
    margin-top: 64px;
  }
`;

export const StyledAuth = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: right;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 32px;
  background-color: ${({ theme }) => theme.color.beige1};
`;

export const StyledWelcome = styled.div`
  margin: 32px;
  font-weight: ${({ theme }) => theme.weight.medium};
  font-size: ${({ theme }) => theme.size.diplodocus};
`;
