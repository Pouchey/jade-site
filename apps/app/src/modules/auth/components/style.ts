import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const StyledPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.green1};

  *:last-child {
    margin-top: 64px;
  }

  @media (width < ${({ theme }) => theme.responsive.mobile}) {
    display: none;
  }
`;

export const StyledAuth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 32px;
  background-color: ${({ theme }) => theme.color.beige1};
`;

export const StyledWelcome = styled.div`
  margin: 32px;
  font-size: ${({ theme }) => theme.size.diplodocus};
  font-weight: ${({ theme }) => theme.weight.medium};
`;
