import styled from 'styled-components';

import { StyledImageWrapper as ImageWrapper } from '_components/image/style';

export const StyledImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  ${ImageWrapper} {
    width: 100%;
    height: 100%;

    > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

export const StyledDelete = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;

export const StyledPlus = styled.div`
  position: absolute;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

export const StyledInputFileWrapper = styled.div`
  position: relative;

  &:hover {
    ${StyledPlus} {
      opacity: 1;
    }
  }
`;
