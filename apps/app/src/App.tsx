import useInitReactQueryClient from '_hooks/useInitReactQueryClient';
import React from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import Admin from '_modules/admin/views';
import { useAuthContext } from '_modules/auth/hooks/useContext';
import Home from '_modules/home/views';
import { useFetchMe } from '_modules/me/hooks/useServices';
import SongList from '_modules/song-list/views';
import UIWrapper from '_modules/ui/components';

const App = React.memo(() => {
  useInitReactQueryClient();
  const { state } = useAuthContext();
  const { pathname } = useLocation();

  useFetchMe();

  if (!state?.isLogged)
    return <Navigate to="/login" state={{ from: pathname }} />;

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
