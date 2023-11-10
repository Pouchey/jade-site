import React from 'react';

import TabsFooter from '_modules/song-list/components/footer';
import TabLink from '_modules/song-list/components/link';
import SongSearch from '_modules/song-list/components/search';
import Songs from '_modules/song-list/components/songs';
import { SongListProvider } from '_modules/song-list/hooks/useContext';
import { TABS } from '_modules/song-list/utils';

import { StyledSongList } from './style';

const SongList = React.memo(() => {
  return (
    <SongListProvider defaultType={TABS[1]}>
      <StyledSongList>
        <Songs />
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
