import React from 'react';

import Loader from '_components/loader';

import LastItem from '_modules/song/components/common/last-item';
import { useFetchSongs } from '_modules/song/hooks/useServices';
import { formatSongPages } from '_modules/song/utils';

import Item from './Item';
import { StyledSongItemList } from './style';

const Songs = React.memo(() => {
  const {
    data: songs,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFetchSongs(true);

  const { items, lastItem } = formatSongPages(songs?.pages);

  const handleFetchNextPage = React.useCallback(() => {
    if (hasNextPage) {
      void fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage]);

  return (
    <StyledSongItemList>
      {items?.map((song) => <Item key={song.id} song={song} />)}
      {lastItem && (
        <LastItem fetchNext={handleFetchNextPage}>
          <Item key={lastItem.id} song={lastItem} />
        </LastItem>
      )}
      {isFetchingNextPage && <Loader label="Loading songs..." size={32} />}
    </StyledSongItemList>
  );
});

export default Songs;
