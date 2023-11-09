import React from 'react';

import Label from '_components/label';
import Loader from '_components/loader';
import Search from '_components/search';

import { useFetchSongs } from '_modules/song/hooks/useServices';

import { TSong } from '_shared/song/types';

import Item from './Item';
import { StyledContainer, StyledSongItemList } from './style';

interface Props {
  handleClick: (song: TSong) => void;
}

const SelectSong = React.memo(({ handleClick }: Props) => {
  const { isFetching, data: songs } = useFetchSongs();

  const handleSearch = (value: string) => {
    console.log(value);
  };

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
      <Search placeholder="Find a song..." onSearch={handleSearch} />
      <StyledSongItemList>
        {songs?.items?.map((song) => (
          <Item key={song.id} song={song} onClick={handleClick} />
        ))}
      </StyledSongItemList>
    </StyledContainer>
  );
});

export default SelectSong;
