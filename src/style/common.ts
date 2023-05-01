import styled from 'styled-components';

export const StyledTitle = styled.div`
  font-family: 'Ms Madi', cursive;
  font-size: ${({ theme }) => theme.size.diplodocus};
  font-weight: ${({ theme }) => theme.weight.regular};
  line-height: 50px;
  color: ${({ theme }) => theme.color.white};
`;

export const StyledDarkTitle = styled(StyledTitle)`
  color: ${({ theme }) => theme.color.black};
`;
