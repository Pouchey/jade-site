import React from 'react';

import { addSongToQueue } from '_modules/player/services/socket';
import Artist from '_modules/song/components/common/artist';
import Requested from '_modules/song/components/common/requested';
import Title from '_modules/song/components/common/title';
import Song from '_modules/song/views/detail';

import { TSong } from '_shared/song/types';

import { StyledDesc, StyledWrapper } from './style';

interface Props {
  song: TSong;
}
const Item = ({ song }: Props) => {
  const handleAddSong = (songId: number) => {
    addSongToQueue(songId);
  };

  const isSelected = false;
  const count = 1;
  const requester = undefined;

  return (
    <Song
      key={song.id}
      song={song}
      isSelected={isSelected}
      onSelect={handleAddSong}
    >
      <StyledDesc>
        <StyledWrapper>
          <Title title={song.title} />
          <Requested count={count} requester={requester} />
        </StyledWrapper>
        <Artist artist={song.artist} />
      </StyledDesc>
    </Song>
  );
};

export default Item;
