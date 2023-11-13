import React from 'react';

import Counter from '_components/counter';
import Image from '_components/image';
import Label from '_components/label';

import { getImageUrl } from '_modules/file/utils';

import { TSong } from '_shared/song/types';

import Empty from './empty';
import Fake from './fake';
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
  current?: TSong | null;
  isLoading?: boolean;
}

const Player = React.memo(({ current, isLoading = false }: Props) => {
  const imageUrl = getImageUrl(current?.icon);

  if (isLoading) return <Fake />;

  if (!current) return <Empty />;

  return (
    <StyledPlayer>
      <StyledPlayerSection>
        <StyledImageWrapper>
          <Image size={100} url={imageUrl} alt={current.title} />
        </StyledImageWrapper>
        <StyledDesc>
          <StyledSongName>{current.title}</StyledSongName>
          <StyledArtist>{current.artist}</StyledArtist>
        </StyledDesc>
      </StyledPlayerSection>
      <StyledPlayerSection>
        <StyledPlayerInfos>
          <StyledCounterWrapper>
            <Counter readonly count={current?.count} />
          </StyledCounterWrapper>
          {current?.requester?.name && (
            <Label content={`Requested by ${current.requester.name}`} />
          )}
        </StyledPlayerInfos>
      </StyledPlayerSection>
    </StyledPlayer>
  );
});

export default Player;
