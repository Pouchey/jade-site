import styled from 'styled-components';

import { CounterElement } from './types';

export const StyledCounterText = styled.span`
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.weight.medium};
  font-size: ${({ theme }) => theme.size.grizzly};
`;

export const StyledLike = styled.span``;

export const StyledReadOnyCounter = styled.div<CounterElement>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  ${StyledLike} {
    margin-right: 8px;
  }

  ${StyledCounterText} {
    color: ${({ theme, requested }) => requested && theme.color.red1};
  }
`;

export const StyledCounter = styled(StyledReadOnyCounter)`
  justify-content: center;
  width: 80px;
  min-width: 100px;
  height: 40px;
  min-height: 40px;
  border: 1px solid ${({ theme }) => theme.color.black};
  border-radius: 32px;
  cursor: pointer;

  ${StyledCounterText} {
    margin: 0 8px;
  }

  ${({ requested, theme }) =>
    requested &&
    ` 
      border: 1px solid ${theme.color.red1};
    `};
`;
