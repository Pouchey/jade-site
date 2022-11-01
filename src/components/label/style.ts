import styled from 'styled-components';

export const StyledLabel = styled.p`
  overflow: hidden;
  color: ${({ theme }) => theme.color.grey60};
  white-space: nowrap;
  text-overflow: ellipsis;
`;
