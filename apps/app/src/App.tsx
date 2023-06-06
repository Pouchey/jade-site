import { Route, Routes } from 'react-router-dom';

import Home from '_modules/home/components';
import SongList from '_modules/song-list/components';
import UIWrapper from '_modules/ui/components';

const App = () => {
  return (
    <UIWrapper>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="songlist" element={<SongList />} />
      </Routes>
    </UIWrapper>
  );
};

export default App;
