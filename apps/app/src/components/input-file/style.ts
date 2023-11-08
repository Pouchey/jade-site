import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledInputFile = styled.div`
  position: relative;
  display: inline-block;
  overflow: hidden;
  padding: 16px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.color.grey30};

  > span {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 100%;
    height: 100%;
  }

  > input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  &:hover,
  &:focus {
    box-shadow: 0 2px 4px ${({ theme }) => rgba(theme.color.black, 0.5)} inset;
  }
`;
