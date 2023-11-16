import React from 'react';

import Loader from '_components/loader';

import { TSong } from '_shared/song/types';

import Item from './Item';
import Fake from './fake';
import { StyledSongItemList } from './style';

interface Props {
  songs?: TSong[];
  isLoading?: boolean;
}

const RequestedSongs = ({ songs, isLoading = false }: Props) => {
  if (isLoading) return <Loader label="Loading songs..." />;

  if (!songs?.length) return <Fake />;

  const orderedSongs = songs.toSorted((a, b) => b.count! - a.count!);

  return (
    <StyledSongItemList>
      {orderedSongs?.map((song) => <Item key={song.id} song={song} />)}
    </StyledSongItemList>
  );
};

export default RequestedSongs;
