import React from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '_components/not-found';

import useInitReactQueryClient from '_hooks/useInitReactQueryClient';

import Admin from '_modules/admin/views/detail';
// import Donate from '_modules/donate/views';
import Home from '_modules/home/views/detail';
import Pseudo from '_modules/home/views/pseudo';
import { useFetchPlayer } from '_modules/player/hooks/useServices';
import CreateSong from '_modules/song/views/create';
import SongList from '_modules/song/views/list';
import UpdateSong from '_modules/song/views/update';
import UIWrapper from '_modules/ui/components';

const App = React.memo(() => {
  useInitReactQueryClient();
  useFetchPlayer();

  return (
    <UIWrapper>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="pseudo" element={<Pseudo />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route path="create" element={<CreateSong />} />
          <Route path="update/:id" element={<UpdateSong />} />
        </Route>
        <Route path="/songlist" element={<SongList />} />
        {/* <Route path="/donate" element={<Donate />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </UIWrapper>
  );
});

export default App;
