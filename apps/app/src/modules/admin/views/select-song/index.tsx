import React from 'react';

import Label from '_components/label';
import Loader from '_components/loader';

import Song from '_modules/song/components/song';
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
        {songs?.map((song) => <Song key={song.id} song={song} />)}
      </StyledSongItemList>
    </StyledContainer>
  );
});

export default SelectSong;
