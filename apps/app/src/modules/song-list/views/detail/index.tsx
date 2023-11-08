import React from 'react';

import Search from '_components/search';

import Tabs from '_modules/song-list/components/tabs';
import { TABS } from '_modules/song-list/utils';
import TabsContainer from '_modules/tabs/components/container';
import TabsFooter from '_modules/tabs/components/footer';
import TabLink from '_modules/tabs/components/link';

const SongList = React.memo(() => {
  return (
    <TabsContainer defaultTab={TABS[1]}>
      <Tabs />
      <Search />
      <TabsFooter tabs={TABS}>
        <TabLink glyph="star" value={TABS[0]} />
        <TabLink glyph="flamme" value={TABS[1]} />
        <TabLink glyph="heart" value={TABS[2]} />
      </TabsFooter>
    </TabsContainer>
  );
});

export default SongList;
