import { Route, Routes } from 'react-router-dom';

import SongList from '_modules/song-list/components';
import UIWrapper from '_modules/ui/components';

import {randInt} from '_utils/random';

randInt(1, 10);

export default () => {
  return (
    <UIWrapper>
      <Routes>
        <Route path="/" element={<SongList />} />
      </Routes>
    </UIWrapper>
  );
};
