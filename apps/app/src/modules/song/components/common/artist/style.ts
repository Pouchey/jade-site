import styled from 'styled-components';

export const StyledArtist = styled.div`
  overflow: hidden;
  font-size: ${({ theme }) => theme.size.tall};
  font-weight: ${({ theme }) => theme.weight.regular};
  text-overflow: ellipsis;
  text-transform: uppercase;
  white-space: nowrap;
`;
