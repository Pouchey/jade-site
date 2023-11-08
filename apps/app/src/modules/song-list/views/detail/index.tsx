import React from 'react';

import Search from '_components/search';

import Tabs from '_modules/song-list/components/tabs';
import { TABS } from '_modules/song-list/utils';
import TabsContainer from '_modules/tabs/components/container';
import TabsFooter from '_modules/tabs/components/footer';
import TabLink from '_modules/tabs/components/link';

import { StyledSearchWrapper } from './style';

const SongList = React.memo(() => {
  const handleSearch = (searchValue: string) => {
    console.log(searchValue);
  };

  return (
    <TabsContainer defaultTab={TABS[1]}>
      <Tabs />
      <StyledSearchWrapper>
        <Search placeholder="Find a song..." search={handleSearch} />
      </StyledSearchWrapper>
      <TabsFooter tabs={TABS}>
        <TabLink glyph="star" value={TABS[0]} />
        <TabLink glyph="flamme" value={TABS[1]} />
        <TabLink glyph="heart" value={TABS[2]} />
      </TabsFooter>
    </TabsContainer>
  );
});

export default SongList;
