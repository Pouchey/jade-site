import { rgba } from 'polished';
import styled from 'styled-components';

export const StyledForm = styled.form`
  position: relative;
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

  &:focus {
    box-shadow: 0 2px 4px ${({ theme }) => rgba(theme.color.black, 0.5)} inset;
  }
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
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;

  > * {
    cursor: pointer;
  }
`;
