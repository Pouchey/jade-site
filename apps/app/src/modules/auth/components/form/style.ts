import styled from 'styled-components';

import { StyledButton } from '_components/button/style';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 64px 32px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 8px;

  ${StyledButton} {
    margin-top: 64px;
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.beige1};
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 8px;
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

export const StyledIconButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPassword = styled.div`
  position: relative;
  width: 100%;
  height: 40px;

  ${StyledInput} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  *:last-child {
    position: absolute;
    top: 0;
    right: 4px;
    bottom: 0;
    margin: auto;
    cursor: pointer;

    &:hover {
      svg {
        fill: ${({ theme }) => theme.color.black};
      }
    }
  }
`;
