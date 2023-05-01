import Button from '_components/button';

import Player from '_modules/player/components';
import useScrollShadow from '_modules/song-list/hooks/useScrollShadow';
import { SongType } from '_modules/song/types';

import SongItem from './song-item';
import { StyledContainer, StyledSongItemList, StyledWrapper } from './style';

const songs: SongType[] = [];
for (let i = 0; i < 10; i++) {
  songs.push({
    id: i,
    songName: 'Song Name',
    artist: 'Artist',
    icon: {
      url: 'https://picsum.photos/200',
      alt: 'Play',
    },
    count: i,
    requester: {
      id: i,
      name: 'Requester Name',
    },
  });
}

export default () => {
  const [scroll, { onScroll }] = useScrollShadow();

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
        <StyledSongItemList onScroll={onScroll} scroll={scroll}>
          {songs?.map((song) => (
            <SongItem key={song.id} song={song} />
          ))}
        </StyledSongItemList>
      </StyledWrapper>
    </StyledContainer>
  );
};
