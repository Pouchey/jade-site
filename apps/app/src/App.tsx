import React from 'react';
import { Route, Routes } from 'react-router-dom';

import useInitReactQueryClient from '_hooks/useInitReactQueryClient';

import Admin from '_modules/admin/views';
import Donate from '_modules/donate/views';
import Home from '_modules/home/views';
import SongList from '_modules/song-list/views/detail';
import UIWrapper from '_modules/ui/components';

const App = React.memo(() => {
  useInitReactQueryClient();

  return (
    <UIWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/songlist" element={<SongList />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </UIWrapper>
  );
});

export default App;
