import { useEffect, useState } from 'react';

import {
  onPlayerUpdate,
  fetchPlayer,
  onSongAdded,
} from '_modules/player/services/socket';

import { TPlayer } from '_shared/player/types';

export const useFetchPlayer = () => {
  const [player, setPlayer] = useState<TPlayer | null>(null);

  useEffect(() => {
    fetchPlayer();

    onPlayerUpdate((data) => {
      setPlayer(data);
    });
    onSongAdded((data) => {
      if (!player) return;
      setPlayer({
        ...player,
        songs: [...player.songs, data],
      });
    });
  }, []);

  return player;
};
