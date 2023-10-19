import styled from 'styled-components';

export const StyledMain = styled.main`
  display: grid;
  grid-template: ${({ theme }) => theme.metrics.topbarHeight} 1fr / 1fr;
  grid-template-areas:
    'topbar '
    'content';
  height: 100vh;
  max-height: 100vh;
  background-color: ${({ theme }) => theme.color.beige1};
`;

export const StyledContent = styled.div`
  grid-area: content;
  width: 100%;
  margin: 0 auto;
  overflow-y: auto;
`;
