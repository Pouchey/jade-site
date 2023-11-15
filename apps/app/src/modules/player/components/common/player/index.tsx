import React from 'react';

import Counter from '_components/counter';
import Icon from '_components/icon';
import Image from '_components/image';
import Label from '_components/label';
import Loader from '_components/loader';

import { useAuthContext } from '_modules/auth/hooks/useContext';
import { getImageUrl } from '_modules/file/utils';
import { nextSong } from '_modules/player/services/socket';
import Artist from '_modules/song/components/common/artist';
import Title from '_modules/song/components/common/title';

import { TSong } from '_shared/song/types';

import Empty from './empty';
import Fake from './fake';
import {
  StyledPlayer,
  StyledImageWrapper,
  StyledDesc,
  StyledPlayerSection,
  StyledPlayerInfos,
  StyledCounterWrapper,
  StyledIconWrapper,
  StyledPlaying,
} from './style';

interface Props {
  current?: TSong | null;
  isLoading?: boolean;
}

const Player = React.memo(({ current, isLoading = false }: Props) => {
  const imageUrl = getImageUrl(current?.icon);

  const { state } = useAuthContext();

  const isLogged = state.isLogged;

  const handleStop = () => {
    nextSong(-1);
  };

  if (isLoading) return <Fake />;

  if (!current) return <Empty />;

  return (
    <StyledPlayer>
      <StyledPlayerSection>
        <StyledImageWrapper>
          <Image size={100} url={imageUrl} alt={current.title} />
        </StyledImageWrapper>
        <StyledDesc>
          <Title title={current.title} />
          <Artist artist={current.artist} />
          <StyledPlaying>
            <Loader size={16} />
          </StyledPlaying>
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
        {isLogged && (
          <StyledIconWrapper onClick={handleStop}>
            <Icon glyph="stopCircle" size={32} />
          </StyledIconWrapper>
        )}
      </StyledPlayerSection>
    </StyledPlayer>
  );
});

export default Player;
