import React from 'react';

import Counter from '_components/counter';
import Image from '_components/image';
import Label from '_components/label';

import { TSong } from '_shared/song/types';

import {
  StyledPlayer,
  StyledSongName,
  StyledArtist,
  StyledImageWrapper,
  StyledDesc,
  StyledPlayerSection,
  StyledPlayerInfos,
  StyledCounterWrapper,
} from './style';

interface Props {
  current: TSong;
}

const Player = React.memo(({ current }: Props) => {
  if (!current) return null;

  return (
    <StyledPlayer>
      <StyledPlayerSection>
        <StyledImageWrapper>
          <Image size={100} url={current.icon.url} alt={current.icon.alt} />
        </StyledImageWrapper>
        <StyledDesc>
          <StyledSongName>{current.songName}</StyledSongName>
          <StyledArtist>{current.artist}</StyledArtist>
        </StyledDesc>
      </StyledPlayerSection>
      <StyledPlayerSection>
        <StyledPlayerInfos>
          <StyledCounterWrapper>
            <Counter readonly count={current.count} />
          </StyledCounterWrapper>
          <Label content={`Requested by ${current.requester.name}`} />
        </StyledPlayerInfos>
      </StyledPlayerSection>
    </StyledPlayer>
  );
});

export default Player;
