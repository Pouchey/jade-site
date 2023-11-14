import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Button from '_components/button';

import Player from '_modules/player/components/common/player';
import RequestedSongs from '_modules/player/components/common/requested-songs';
import usePlayerStore from '_modules/player/hooks/useStore';

import { StyledContainer, StyledWrapper } from './style';

const Home = React.memo(() => {
  const navigate = useNavigate();

  const player = usePlayerStore().player;

  const isLoading = !player;

  const handleAddSong = () => {
    navigate('/songlist');
  };

  return (
    <StyledContainer>
      <StyledWrapper>
        <Player current={player?.current} isLoading={isLoading} />
        <Button
          label="ADD A SONG"
          color="primary"
          size="diplodocus"
          onClick={handleAddSong}
        />
      </StyledWrapper>
      <RequestedSongs songs={player?.songs} isLoading={isLoading} />
      <Outlet />
    </StyledContainer>
  );
});

export default Home;
