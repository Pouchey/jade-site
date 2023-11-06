import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 20px;
  background: ${({ theme }) => theme.color.green1};
  border-radius: 8px;
`;

export const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.beige1};
  border: none;
  border-radius: 8px;
  outline: none;
`;

export const StyledLabel = styled.label`
  font-size: ${({ theme }) => theme.size.big};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

export const StyledImg = styled.img`
  align-self: center;
  width: 150px;
  height: 150px;
  background-color: ${({ theme }) => theme.color.beige1};
  border-radius: 8px;
`;

export const StyledIconContainer = styled.div`
  position: absolute;
  right: 40px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  > * {
    cursor: pointer;
  }
`;

export const StyledIconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  max-height: 150px;
  background-color: ${({ theme }) => theme.color.beige1};
  border-radius: 8px;

  > * {
    cursor: pointer;
  }
`;
