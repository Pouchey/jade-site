import styled from 'styled-components';

import { LoaderType } from './types';

// const loaderAnimation = keyframes`
//   0% {
//     transform: scale(0);
//     opacity: 1;
//   }

//   100% {
//     transform: scale(1);
//     opacity: 0;
//   }
// `;

export const StyledLoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;

export const StyledBar = styled.span<LoaderType>`
  width: ${({ size }) => (size || 32) / 8}px;
  height: ${({ size }) => size || 32}px;
  margin: 2px;
  background-color: ${({ theme, color }) => theme.color[color || 'black']};
  border-radius: 8px;
`;

export const StyledLoader = styled.div<LoaderType>`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLoaderLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: ${({ theme }) => theme.size.big};
`;
