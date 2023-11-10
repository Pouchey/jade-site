import React from 'react';

import Label from '_components/label';
import Loader from '_components/loader';
import Search from '_components/search';

import { useSongListContext } from '_modules/song-list/hooks/useContext';
import { useFetchSongs } from '_modules/song/hooks/useServices';

import { TSong } from '_shared/song/types';

import Item from './Item';
import { StyledContainer, StyledSongItemList } from './style';

interface Props {
  handleClick: (song: TSong) => void;
}

const SelectSong = React.memo(({ handleClick }: Props) => {
  const { isFetching, isRefetching, data } = useFetchSongs();

  const { state, dispatch } = useSongListContext();

  const handleSearch = (value: string) => {
    dispatch({ type: 'setQ', payload: { q: value } });
  };

  return (
    <StyledContainer>
      <Search
        placeholder="Find a song..."
        onSearch={handleSearch}
        isLoading={isRefetching}
      />
      {isFetching && !data?.pages[0].items?.length && (
        <Loader label="Loading songs..." />
      )}
      <StyledSongItemList>
        {data?.pages?.map((page) => (
          page.items.map((song) => 
          <Item key={song.id} song={song} onClick={handleClick} />
        )))}
      </StyledSongItemList>
      {!data?.pages[0].items?.length && <Label content="No songs found" />}
    </StyledContainer>
  );
});

export default SelectSong;
