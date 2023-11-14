import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { SongListProvider } from '_modules/song-list/hooks/useContext';

import AddSong from '../components/common/add-song';
import SelectSong from '../components/common/select-song';

import { StyledContainer, StyledComponentContainer } from './style';

const Content = React.memo(() => {
  const navigate = useNavigate();

  const handleCreateSong = () => {
    navigate('create');
  };

  const handleUpdateSong = (songId: number) => {
    navigate(`update/${songId}`);
  };

  return (
    <SongListProvider>
      <StyledContainer>
        <AddSong handleClick={handleCreateSong} />
        <StyledComponentContainer>
          <SelectSong handleClick={handleUpdateSong} />
        </StyledComponentContainer>
        <Outlet />
      </StyledContainer>
    </SongListProvider>
  );
});

export default Content;
