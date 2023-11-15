import styled from 'styled-components';

export const StyledRequested = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
`;

export const StyledCount = styled.div`
  color: ${({ theme }) => theme.color.red1};
`;
