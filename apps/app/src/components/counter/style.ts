import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  5% {
    transform: scale(1.2);
  }
  10% {
    transform: scale(1);
  }
  15% {
    transform: scale(1.2);
  }
  20% {
    transform: scale(1);
  }

`;

export interface StyledCounterProps {
  $liked?: boolean;
  $disabled?: boolean;
}

export const StyledCounterText = styled.span`
  font-size: ${({ theme }) => theme.size.huge};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.color.black};
`;

export const StyledLike = styled.span`
  display: flex;
  animation: ${pulse} cubic-bezier(0.4, 0, 0.6, 1) 5s infinite;
`;

export const StyledReadOnyCounter = styled.div<StyledCounterProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 80px;
  min-width: 80px;
  height: 40px;
  min-height: 40px;

  ${StyledLike} {
    margin-right: 8px;
  }

  ${StyledCounterText} {
    color: ${({ theme, $liked }) => $liked && theme.color.red1};
  }
`;

export const StyledCounter = styled(StyledReadOnyCounter)`
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${({ theme }) => theme.color.grey50};
  border-radius: 32px;

  ${StyledCounterText} {
    margin: 0 8px;
  }

  ${StyledLike} {
    animation: none;
  }

  ${({ $liked, theme }) =>
    $liked &&
    ` 
      border: 1px solid ${theme.color.red1};
    `};

  ${({ $disabled, theme }) =>
    $disabled &&
    `
      border: 1px solid ${theme.color.grey30};
      cursor: not-allowed;
    `};
`;
