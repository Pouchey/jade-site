import { rgba } from 'polished';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const guitarAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(0deg);
  }
`;

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledNotFound = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 70%;
  height: 70%;
  padding: 8px;
  background-color: ${({ theme }) => theme.color.green1};
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.2s ease-in;
`;

export const StyledIconWrapper = styled.div`
  animation: ${guitarAnimation} 2s infinite;
`;

export const StyledTitle = styled.h1`
  margin-bottom: 16px;
  font-size: ${({ theme }) => theme.size.diplodocus};
  text-shadow: 0px 2px 4px ${({ theme }) => rgba(theme.color.black, 0.25)};
  color: ${({ theme }) => theme.color.white};
`;

export const StyledSubtitle = styled.p`
  font-size: ${({ theme }) => theme.size.big};
  max-width: 600px;
  text-align: center;
  line-height: 1.5;
  color: ${({ theme }) => theme.color.black};
`;

export const StyledLink = styled.a`
  font-size: ${({ theme }) => theme.size.big};
  color: ${({ theme }) => theme.color.white};
  text-decoration: underline;
`;
