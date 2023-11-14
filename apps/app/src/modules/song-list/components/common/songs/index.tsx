import React from 'react';

import Loader from '_components/loader';

import { addSongToQueue } from '_modules/player/services/socket';
import LastItem from '_modules/song-list/components/common/last-item';
import { formatSongPages } from '_modules/song-list/utils';
import SelectSong from '_modules/song/components/common/select-song';
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

  const handleAddSong = (song: TSong) => {
    addSongToQueue(song.id);
  };

  return (
    <StyledSongItemList>
      {items?.map((song) => (
        <SelectSong key={song.id} song={song} onClick={handleAddSong} />
      ))}
      {lastItem && (
        <LastItem fetchNext={handleFetchNextPage}>
          <SelectSong
            key={lastItem.id}
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
