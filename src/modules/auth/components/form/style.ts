import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 64px 32px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 8px;

  * {
    margin-bottom: 16px;
  }

  *:last-child {
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
  font-weight: ${({ theme }) => theme.weight.medium};
  font-size: ${({ theme }) => theme.size.big};
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

    :hover {
      svg {
        fill: ${({ theme }) => theme.color.black};
      }
    }
  }
`;
