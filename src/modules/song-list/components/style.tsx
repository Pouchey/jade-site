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
  display: grid;
  grid-row-gap: 20px;
  width: 100%;
  padding: 20px;
`;
