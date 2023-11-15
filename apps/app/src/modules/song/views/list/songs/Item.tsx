import { getSocketToken } from '_modules/auth/utils';
import usePlayerStore from '_modules/player/hooks/useStore';
import { addSongToQueue } from '_modules/player/services/socket';
import { isSongLiked } from '_modules/player/utils';
import Artist from '_modules/song/components/common/artist';
import Requested from '_modules/song/components/common/requested';
import Title from '_modules/song/components/common/title';
import Song from '_modules/song/views/detail';

import { TSong } from '_shared/song/types';

import { StyledDesc, StyledWrapper } from './style';

interface Props {
  song: TSong;
}
const Item = ({ song }: Props) => {
  const player = usePlayerStore((state) => state.player);

  const playerSong =
    player?.songs?.find((s) => s.id === song.id) ||
    (player?.current?.id === song.id ? player.current : undefined);
  const isSelected = !!playerSong;
  const isLiked = isSongLiked(playerSong?.likes, getSocketToken()!);

  const handleAddSong = (songId: number) => {
    if (!playerSong) addSongToQueue(songId);
  };

  return (
    <Song
      key={song.id}
      song={song}
      isSelected={isSelected}
      onSelect={handleAddSong}
    >
      <StyledDesc>
        <StyledWrapper>
          <Title title={song.title} />
          {playerSong && (
            <Requested
              count={playerSong.count}
              requester={playerSong.requester}
              isLiked={isLiked}
            />
          )}
        </StyledWrapper>
        <Artist artist={song.artist} />
      </StyledDesc>
    </Song>
  );
};

export default Item;
