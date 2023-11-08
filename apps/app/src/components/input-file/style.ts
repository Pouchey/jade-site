import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledInputFile = styled.div`
  position: relative;
  display: inline-block;
  padding: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.color.grey30};
  border-radius: 4px;

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
    cursor: pointer;
    opacity: 0;
  }
`;
