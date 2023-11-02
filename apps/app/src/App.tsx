import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Admin from '_modules/admin/views';
import Home from '_modules/home/views';
import SongList from '_modules/song-list/views';
import UIWrapper from '_modules/ui/components';

const App = React.memo(() => {
  return (
    <UIWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="songlist" element={<SongList />} />
      </Routes>
    </UIWrapper>
  );
});

export default App;
