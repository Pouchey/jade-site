import React from 'react';

import SongSearch from '_modules/song-list/components/search';
import Tabs from '_modules/song-list/components/tabs';
import { SongListProvider } from '_modules/song-list/hooks/useContext';
import { TABS } from '_modules/song-list/utils';
import TabsContainer from '_modules/tabs/components/container';
import TabsFooter from '_modules/tabs/components/footer';
import TabLink from '_modules/tabs/components/link';

const SongList = React.memo(() => {
  return (
    <SongListProvider defaultType={TABS[1]}>
      <TabsContainer defaultTab={TABS[1]}>
        <Tabs />
        <SongSearch />
        <TabsFooter tabs={TABS}>
          <TabLink glyph="star" value={TABS[0]} />
          <TabLink glyph="flamme" value={TABS[1]} />
          <TabLink glyph="heart" value={TABS[2]} />
        </TabsFooter>
      </TabsContainer>
    </SongListProvider>
  );
});

export default SongList;
