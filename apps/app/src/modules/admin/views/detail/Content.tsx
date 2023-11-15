import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import AddSong from '_modules/admin/components/tabs/add-song';
import SongList from '_modules/admin/components/tabs/song-list';
import { SongProvider } from '_modules/song/hooks/useContext';

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
    <SongProvider>
      <StyledContainer>
        <AddSong handleClick={handleCreateSong} />
        <StyledComponentContainer>
          <SongList handleClick={handleUpdateSong} />
        </StyledComponentContainer>
        <Outlet />
      </StyledContainer>
    </SongProvider>
  );
});

export default Content;
