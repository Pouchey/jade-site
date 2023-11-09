import React from 'react';

import Loader from '_components/loader';

import Song from '_modules/song/components/song';

import { TSong } from '_shared/song/types';

import Fake from './fake';
import { StyledSongItemList } from './style';

interface Props {
  songs?: TSong[];
  isLoading?: boolean;
}

const RequestedSongs = ({ songs, isLoading = false }: Props) => {
  if (isLoading) return <Loader label="Loading songs..." />;

  if (!songs?.length) return <Fake />;

  return (
    <StyledSongItemList>
      {songs?.map((song) => <Song key={song.id} song={song} />)}
    </StyledSongItemList>
  );
};

export default RequestedSongs;
