import React from 'react';

import TabsFooter from '_modules/song-list/components/footer';
import TabLink from '_modules/song-list/components/link';
import SongSearch from '_modules/song-list/components/search';
import { SongListProvider } from '_modules/song-list/hooks/useContext';
import { TABS } from '_modules/song-list/utils';
import Song from '_modules/song/components/song';
import { useFetchSongs } from '_modules/song/hooks/useServices';

import { StyledSongItemList, StyledSongList } from './style';

const SongList = React.memo(() => {
  const { data: songs } = useFetchSongs();

  return (
    <SongListProvider defaultType={TABS[1]}>
      <StyledSongList>
        <StyledSongItemList>
          {songs?.items?.map((song) => <Song key={song.id} song={song} />)}
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
