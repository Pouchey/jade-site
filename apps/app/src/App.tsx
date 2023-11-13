import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '_components/not-found';

import useInitReactQueryClient from '_hooks/useInitReactQueryClient';

import Admin from '_modules/admin/views';
import Donate from '_modules/donate/views';
import Home from '_modules/home/views';
import { useFetchPlayer } from '_modules/player/hooks/useServices';
import SongList from '_modules/song-list/views/list';
import UIWrapper from '_modules/ui/components';

const App = React.memo(() => {
  useInitReactQueryClient();
  useFetchPlayer();

  return (
    <UIWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/songlist" element={<SongList />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UIWrapper>
  );
});

export default App;
