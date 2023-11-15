import React from 'react';

import TabsFooter from '_modules/song/components/common/footer';
import TabLink from '_modules/song/components/common/link';
import SongSearch from '_modules/song/components/common/search';
import { SongProvider } from '_modules/song/hooks/useContext';
import { TABS } from '_modules/song/utils';
import Songs from '_modules/song/views/list/songs';

import { StyledSongList } from './style';

const SongList = React.memo(() => {
  return (
    <SongProvider defaultType={TABS[1]}>
      <StyledSongList>
        <Songs />
        <SongSearch />
        <TabsFooter tabs={TABS}>
          <TabLink glyph="star" value={TABS[0]} />
          <TabLink glyph="flame" value={TABS[1]} />
          <TabLink glyph="heart" value={TABS[2]} />
        </TabsFooter>
      </StyledSongList>
    </SongProvider>
  );
});

export default SongList;
