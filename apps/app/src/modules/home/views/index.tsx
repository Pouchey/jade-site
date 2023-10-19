import { useNavigate } from 'react-router-dom';

import Button from '_components/button';
import Label from '_components/label';
import Loader from '_components/loader';

import { useFetchPlayer } from '_modules/player/hooks/useServices';
import Player from '_modules/player/views';

import SongItem from '../components/song-item';

import { StyledContainer, StyledSongItemList, StyledWrapper } from './style';

const Home = () => {
  const navigate = useNavigate();

  const { isFetching, data: player } = useFetchPlayer();

  const handleAddSong = () => {
    navigate('/songlist');
  };

  if (isFetching) {
    return (
      <StyledContainer>
        <Loader label="Chargement..." />;
      </StyledContainer>
    );
  }

  if (!player) {
    return (
      <StyledContainer>
        <Label content="Rien pour le moment" />
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <StyledWrapper>
        <Player current={player.current} />
        <Button
          label="ADD A SONG"
          color="primary"
          size="diplodocus"
          onClick={handleAddSong}
        />
      </StyledWrapper>
      <StyledSongItemList>
        {player.songs?.map((song) => <SongItem key={song.id} song={song} />)}
      </StyledSongItemList>
    </StyledContainer>
  );
};

export default Home;
