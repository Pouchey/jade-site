import styled from 'styled-components';

import {
  StyledCounterText,
  StyledReadOnyCounter,
} from '_components/counter/style';

export const StyledRequested = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  color: ${({ theme }) => theme.color.grey75};

  ${StyledReadOnyCounter} {
    width: 48px;
    min-width: 48px;
  }

  ${StyledCounterText} {
    font-size: ${({ theme }) => theme.size.big};
  }
`;
