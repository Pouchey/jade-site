import { useNavigate } from 'react-router-dom';

import Button from '_components/button';
import Loader from '_components/loader';

import Player from '_modules/player/components';
import { useFetchSongs } from '_modules/song/hooks/useServices';

import SongItem from './song-item';
import { StyledContainer, StyledSongItemList, StyledWrapper } from './style';

const Home = () => {
  const navigate = useNavigate();

  const { isFetching, data: songs } = useFetchSongs();

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

  return (
    <StyledContainer>
      <StyledWrapper>
        <Player />
        <Button
          label="ADD A SONG"
          color="primary"
          size="diplodocus"
          onClick={handleAddSong}
        />
      </StyledWrapper>
      <StyledSongItemList>
        {songs?.map((song) => <SongItem key={song.id} song={song} />)}
      </StyledSongItemList>
    </StyledContainer>
  );
};

export default Home;
