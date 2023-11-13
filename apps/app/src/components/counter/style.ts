import styled from 'styled-components';

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
