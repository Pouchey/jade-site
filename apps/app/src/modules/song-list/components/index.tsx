import Button from '_components/button';

import Player from '_modules/player/components';
import useScrollShadow from '_modules/song-list/hooks/useScrollShadow';
import { useFetchSongs } from '_modules/song/hooks/useServices';

import SongItem from './song-item';
import { StyledContainer, StyledSongItemList, StyledWrapper } from './style';

export default () => {
  const [scroll, { onScroll }] = useScrollShadow();

  const { data: songs } = useFetchSongs();

  return (
    <StyledContainer>
      <StyledWrapper>
        <Player />
        <Button
          label="ADD A SONG"
          color="primary"
          size="diplodocus"
          onClick={() => console.log('add a song')}
        />
      </StyledWrapper>
      <StyledSongItemList onScroll={onScroll} scroll={scroll}>
        {songs?.map((song) => (
          <SongItem key={song.id} song={song} />
        ))}
      </StyledSongItemList>
    </StyledContainer>
  );
};
