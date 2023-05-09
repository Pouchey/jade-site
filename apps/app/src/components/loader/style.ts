import styled, { keyframes } from 'styled-components';

import { LoaderType } from './types';

const loaderAnimation = keyframes`
  0%, 20%, 49% {
    transform: scaleY(0.3);
  }
  10%{
    transform: scaleY(1);
  }
  50%, 70%, 100%{
    transform: scaleY(0.3);
  }
  60% {
    transform: scaleY(1);
  }
`;

export const StyledLoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledBar = styled.span<LoaderType>`
  width: ${({ size }) => (size || 48) / 3}px;
  height: ${({ size }) => size || 48}px;
  margin: 0 2px;
  background-color: ${({ theme, color }) => theme.color[color || 'black']};
  border-radius: 4px;
  transform-origin: bottom;
  animation: ${loaderAnimation} 2s cubic-bezier(0.62, 0.28, 0.23, 0.99)
    alternate-reverse;
  animation-delay: -${({ delay }) => delay || 0}s;
  animation-iteration-count: infinite;
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
