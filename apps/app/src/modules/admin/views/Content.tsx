import React from 'react';

import { SongListProvider } from '_modules/song-list/hooks/useContext';
import { useSongContext } from '_modules/song/hooks/useContext';
import CreateForm from '_modules/song/views/create';
import UpdateForm from '_modules/song/views/update';

import { TSong } from '_shared/song/types';

import AddSong from '../components/common/add-song';
import SelectSong from '../components/common/select-song';

import { StyledContainer } from './style';

const Content = React.memo(() => {
  const { state, dispatch } = useSongContext();

  const handleCreateSong = () => {
    dispatch({
      type: { value: 'setCreateOpen' },
      payload: { isCreateOpen: true },
    });
  };

  const handleUpdateSong = (song: TSong) => {
    dispatch({
      type: { value: 'setUpdateOpen' },
      payload: {
        isUpdateOpen: true,
        song: song,
      },
    });
  };

  return (
    <SongListProvider>
      <StyledContainer>
        <AddSong handleClick={handleCreateSong} />
        <SelectSong handleClick={handleUpdateSong} />
        {state.isCreateOpen && <CreateForm />}
        {state.isUpdateOpen && <UpdateForm />}
      </StyledContainer>
    </SongListProvider>
  );
});

export default Content;
