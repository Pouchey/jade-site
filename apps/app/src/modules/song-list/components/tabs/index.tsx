import React from 'react';

import { TABS } from '_modules/song-list/utils';
import SongList from '_modules/song-list/views/list';
import Tab from '_modules/tabs/components/tab';

const Tabs = () => {
  return (
    <>
      <Tab value={TABS[0]}>
        <SongList />
      </Tab>
      <Tab value={TABS[1]}>
        <SongList />
      </Tab>
      <Tab value={TABS[2]}>
        <SongList />
      </Tab>
    </>
  );
};

export default Tabs;
