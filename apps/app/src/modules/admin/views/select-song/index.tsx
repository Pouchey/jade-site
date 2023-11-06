import React from 'react';

import Label from '_components/label';
import Loader from '_components/loader';

import SongItem from '_modules/home/components/song-item';
import { useFetchSongs } from '_modules/song/hooks/useServices';

import { StyledContainer, StyledSongItemList } from './style';

const SelectSong = React.memo(() => {
  const { isFetching, data: songs } = useFetchSongs();

  if (isFetching) {
    return (
      <StyledContainer>
        <Loader label="Chargement..." />
      </StyledContainer>
    );
  }

  if (!songs) {
    return (
      <StyledContainer>
        <Label content="Rien pour le moment" />
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledSongItemList>
        {songs?.map((song) => <SongItem key={song.id} song={song} />)}
      </StyledSongItemList>
    </StyledContainer>
  );
});

export default SelectSong;
