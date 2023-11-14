import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.white};
  border: none;
  border-radius: 4px;
  outline: none;

  &:focus {
    box-shadow: 0 2px 4px ${({ theme }) => rgba(theme.color.black, 0.5)} inset;
  }
`;
