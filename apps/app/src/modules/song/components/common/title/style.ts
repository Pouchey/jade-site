import styled from 'styled-components';

export const StyledSongName = styled.div`
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.medium};
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;
