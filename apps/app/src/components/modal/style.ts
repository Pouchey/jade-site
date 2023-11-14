import { rgba } from 'polished';
import styled, { keyframes } from 'styled-components';

const overlayFadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const modalAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const StyledModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => rgba(theme.color.black, 0.5)};
  animation: ${overlayFadeIn} 0.3s ease-in-out;
`;

export const StyledModalContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  width: 250px;
  height: 250px;
  padding: 20px;
  margin-top: 150px;
  background-color: ${({ theme }) => theme.color.green1};
  border-radius: 8px;
  animation: ${modalAnimation} 0.3s ease-in-out;
`;

export const StyledModalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.beige1};
  border-radius: 4px;

  > span {
    text-align: center;
  }
`;
