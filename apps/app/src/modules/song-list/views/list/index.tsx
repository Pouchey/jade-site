import React from 'react';

import TabsFooter from '_modules/song-list/components/common/footer';
import TabLink from '_modules/song-list/components/common/link';
import SongSearch from '_modules/song-list/components/common/search';
import Songs from '_modules/song-list/components/common/songs';
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
