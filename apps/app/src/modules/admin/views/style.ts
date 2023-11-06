import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 25px;
  gap: 25px;

  > div {
    width: 100%;
    max-width: 400px;
  }
`;
