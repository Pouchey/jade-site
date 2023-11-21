import styled from 'styled-components';
import { rgba } from 'polished';


import { StyledButton } from '_components/button/style';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 64px 32px;

  ${StyledButton} {
    margin-top: 64px;
  }
`;


export const StyledTitle = styled.h1`
  margin-bottom: 16px;
  padding: 64px 32px 0px;
  text-align: center;
  font-size: ${({ theme }) => theme.size.diplodocus};
  color: ${({ theme }) => theme.color.white};
  text-shadow: 0 2px 4px ${({ theme }) => rgba(theme.color.black, 0.25)};
`;
