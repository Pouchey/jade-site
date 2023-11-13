import React from 'react';

import Label from '_components/label';
import Loader from '_components/loader';
import Search from '_components/search';

import { useSongListContext } from '_modules/song-list/hooks/useContext';
import { useFetchSongs } from '_modules/song/hooks/useServices';

import { TSong } from '_shared/song/types';

import Item from './Item';
import { StyledContainer, StyledSongItemList } from './style';
import { formatSongPages } from '_modules/song-list/utils';
import LastItem from '_modules/song-list/components/last-item';

interface Props {
  handleClick: (song: TSong) => void;
}

const SelectSong = React.memo(({ handleClick }: Props) => {
  const { 
    data: songs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isRefetching,
    isFetching
  } = useFetchSongs();

  const { items, lastItem } = formatSongPages(songs?.pages);

  const handleFetchNextPage = React.useCallback(() => {
    if(hasNextPage) {
      void fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  const { dispatch } = useSongListContext();

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
      {isFetching && !items?.length && (
        <Loader label="Loading songs..." />
      )}
      <StyledSongItemList>
        {items?.map((song) => (
          <Item key={song.id} song={song} onClick={handleClick} />
        ))}
        {lastItem && (
          <LastItem fetchNext={handleFetchNextPage}>
            <Item key={lastItem.id} song={lastItem} onClick={handleClick} />
          </LastItem>
        )}
        {isFetchingNextPage && <Loader label="Loading songs..." size={32} />}
      </StyledSongItemList>
      {!items?.length && <Label content="No songs found" />}
    </StyledContainer>
  );
});

export default SelectSong;
