import React from 'react';

import Counter from '_components/counter';
import Icon from '_components/icon';

import { useAuthContext } from '_modules/auth/hooks/useContext';
import { getSocketToken } from '_modules/auth/utils';
import {
  dislikeSong,
  likeSong,
  nextSong,
} from '_modules/player/services/socket';
import { isSongLiked } from '_modules/player/utils';
import Requested from '_modules/song/components/common/requested';
import TitleAndArtist from '_modules/song/components/common/title-and-artist';
import Song from '_modules/song/views/detail';

import { TSong } from '_shared/song/types';

import { StyledDesc, StyledIconContainer, StyledWrapper } from './style';

interface Props {
  song: TSong;
}

const Item = ({ song }: Props) => {
  const { state } = useAuthContext();

  const isLogged = state.isLogged;
  const isLiked = isSongLiked(song?.likes, getSocketToken()!);

  const handleCounterClick = () => {
    if (isLiked) {
      dislikeSong(song.id);
      return;
    }
    likeSong(song.id);
  };

  const handlePlay = () => {
    nextSong(song.id);
  };

  return (
    <Song song={song}>
      <StyledDesc>
        <StyledWrapper>
          <TitleAndArtist title={song.title} artist={song.artist} />
          <Requested requester={song.requester} />
        </StyledWrapper>
        {isLogged && (
          <StyledIconContainer onClick={handlePlay}>
            <Icon glyph="playCircle" size={32} />
          </StyledIconContainer>
        )}
        <Counter
          isLiked={isLiked}
          count={song.count}
          onClick={handleCounterClick}
        />
      </StyledDesc>
    </Song>
  );
};

export default Item;
