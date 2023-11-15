import React from 'react';

import Counter from '_components/counter';

import { getSocketToken } from '_modules/auth/utils';
import {
  dislikeSong,
  likeSong,
  nextSong,
} from '_modules/player/services/socket';
import Requested from '_modules/song/components/common/requested';
import TitleAndArtist from '_modules/song/components/common/title-and-artist';
import Song from '_modules/song/views/detail';

import { TSong } from '_shared/song/types';

import { StyledDesc, StyledWrapper } from './style';

interface Props {
  song: TSong;
}

const Item = ({ song }: Props) => {
  const handleCounterClick = () => {
    dislikeSong(song.id);
    likeSong(song.id);
  };

  const handlePlay = () => {
    nextSong(song);
  };

  return (
    <Song song={song}>
      <StyledDesc>
        <StyledWrapper>
          <TitleAndArtist title={song.title} artist={song.artist} />
          <Requested count={song.count} requester={song.requester} />
        </StyledWrapper>
        <Counter count={song.count} onClick={handleCounterClick} />
      </StyledDesc>
    </Song>
  );
};

export default Item;
