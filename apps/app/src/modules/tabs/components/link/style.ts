import styled from 'styled-components';

export const StyledLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.black};
  border-radius: 40px;
`;
