import React from 'react';

import {
  StyledPlayer,
  StyledDesc,
  StyledPlayerSection,
  StyledImageWrapper,
  StyledPlayerInfos,
} from '../style';

import { StyledFakeCounter, StyledFakeImage, StyledFakeText } from './style';

const Fake = React.memo(() => {
  return (
    <StyledPlayer>
      <StyledPlayerSection>
        <StyledImageWrapper>
          <StyledFakeImage />
        </StyledImageWrapper>
        <StyledDesc>
          <StyledFakeText />
          <StyledFakeText />
        </StyledDesc>
      </StyledPlayerSection>
      <StyledPlayerSection>
        <StyledPlayerInfos>
          <StyledFakeCounter />
        </StyledPlayerInfos>
      </StyledPlayerSection>
    </StyledPlayer>
  );
});

export default Fake;
