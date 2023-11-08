import styled from 'styled-components';

import { StyledImageWrapper as ImageWrapper } from '_components/image/style';

export const StyledImageWrapper = styled.div`
  display: flex;

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
