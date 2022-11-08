import styled from 'styled-components';

export const StyledTitle = styled.div`
  color: ${({ theme }) => theme.color.white};
  font-weight: ${({ theme }) => theme.weight.regular};
  font-size: ${({ theme }) => theme.size.diplodocus};
  font-family: 'Ms Madi', cursive;
  line-height: 50px;
`;

export const StyledDarkTitle = styled(StyledTitle)`
  color: ${({ theme }) => theme.color.black};
`;
