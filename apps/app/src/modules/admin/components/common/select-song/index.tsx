import React from 'react';

import Label from '_components/label';
import Loader from '_components/loader';

import Song from '_modules/song/components/song';
import { useFetchSongs } from '_modules/song/hooks/useServices';

import { TSong } from '_shared/song/types';

import { StyledContainer, StyledSongItemList } from './style';

interface Props {
  handleClick: (song: TSong) => void;
}

const SelectSong = React.memo(({ handleClick }: Props) => {
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
        {songs?.map((song) => (
          <div key={song.id} onClick={() => handleClick(song)}>
            <Song key={song.id} song={song} />
          </div>
        ))}
      </StyledSongItemList>
    </StyledContainer>
  );
});

export default SelectSong;
