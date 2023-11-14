import React from 'react';

import Loader from '_components/loader';

import { addSongToQueue } from '_modules/player/services/socket';
import LastItem from '_modules/song-list/components/common/last-item';
import { formatSongPages } from '_modules/song-list/utils';
import Song from '_modules/song/components/common/song';
import { useFetchSongs } from '_modules/song/hooks/useServices';

import { TSong } from '_shared/song/types';

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

  const handleAddSong = (song: number) => {
    addSongToQueue(song);
  };

  return (
    <StyledSongItemList>
      {items?.map((song) => (
        <Song key={song.id} type='songlist' song={song} onClick={handleAddSong} />
      ))}
      {lastItem && (
        <LastItem fetchNext={handleFetchNextPage}>
          <Song
            key={lastItem.id}
            type='songlist'
            song={lastItem}
            onClick={handleAddSong}
          />
        </LastItem>
      )}
      {isFetchingNextPage && <Loader label="Loading songs..." size={32} />}
    </StyledSongItemList>
  );
});

export default Songs;
