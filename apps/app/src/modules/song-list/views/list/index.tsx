import React from 'react';

import Loader from '_components/loader';

import TabsFooter from '_modules/song-list/components/footer';
import LastItem from '_modules/song-list/components/last-item';
import TabLink from '_modules/song-list/components/link';
import SongSearch from '_modules/song-list/components/search';
import { SongListProvider } from '_modules/song-list/hooks/useContext';
import { TABS, formatSongPages } from '_modules/song-list/utils';
import Song from '_modules/song/components/song';
import { useFetchSongs } from '_modules/song/hooks/useServices';

import { StyledSongItemList, StyledSongList } from './style';

const SongList = React.memo(() => {
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
    <SongListProvider defaultType={TABS[1]}>
      <StyledSongList>
        <StyledSongItemList>
          {items?.map((song) => <Song key={song.id} song={song} />)}
          {lastItem && (
            <LastItem fetchNext={handleFetchNextPage}>
              <Song key={lastItem.id} song={lastItem} />
            </LastItem>
          )}
          {isFetchingNextPage && <Loader label="Loading songs..." size={32} />}
        </StyledSongItemList>
        <SongSearch />
        <TabsFooter tabs={TABS}>
          <TabLink glyph="star" value={TABS[0]} />
          <TabLink glyph="flame" value={TABS[1]} />
          <TabLink glyph="heart" value={TABS[2]} />
        </TabsFooter>
      </StyledSongList>
    </SongListProvider>
  );
});

export default SongList;
