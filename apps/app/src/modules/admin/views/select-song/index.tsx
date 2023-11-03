import React from 'react';

import Label from '_components/label';
import Loader from '_components/loader';

import SongItem from '_modules/home/components/song-item';
import { useFetchPlayer } from '_modules/player/hooks/useServices';

import { StyledContainer, StyledSongItemList } from './style';

const SelectSong = React.memo(() => {
  const { isFetching, data: player } = useFetchPlayer();

  if (isFetching) {
    return (
      <StyledContainer>
        <Loader label="Chargement..." />;
      </StyledContainer>
    );
  }

  if (!player) {
    return (
      <StyledContainer>
        <Label content="Rien pour le moment" />
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledSongItemList>
        {player.songs?.map((song) => <SongItem key={song.id} song={song} />)}
      </StyledSongItemList>
    </StyledContainer>
  );
});

export default SelectSong;
