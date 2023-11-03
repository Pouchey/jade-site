import styled from 'styled-components';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 10px;
  background: ${({ theme }) => theme.color.green1};
  border-radius: 8px;
`;