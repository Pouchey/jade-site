import React from 'react';

import Loader from '_components/loader';

import LastItem from '_modules/song-list/components/last-item';
import { formatSongPages } from '_modules/song-list/utils';
import Song from '_modules/song/components/song';
import { useFetchSongs } from '_modules/song/hooks/useServices';

import { StyledSongItemList } from './style';

const Songs = React.memo(() => {
  const {
    data: songs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFetchSongs();

  const { items, lastItem } = formatSongPages(songs?.pages);

  const handleFetchNextPage = React.useCallback(() => {
    if (hasNextPage) {
      void fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  return (
    <StyledSongItemList>
      {items?.map((song) => <Song key={song.id} song={song} />)}
      {lastItem && (
        <LastItem fetchNext={handleFetchNextPage}>
          <Song key={lastItem.id} song={lastItem} />
        </LastItem>
      )}
      {isFetchingNextPage && <Loader label="Loading songs..." size={32} />}
    </StyledSongItemList>
  );
});

export default Songs;
