import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
  width: 100%;
  height: 100%;
  padding: 24px;
  overflow-y: hidden;
`;
