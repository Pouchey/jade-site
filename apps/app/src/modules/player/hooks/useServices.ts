import { useEffect } from 'react';

import { setSocketToken } from '_modules/auth/utils';
import {
  onPlayerUpdate,
  fetchPlayer,
  onSongAdded,
  onSongUpdated,
  onTokenUpdated,
  onSongRemoved,
} from '_modules/player/services/socket';

import usePlayerStore from './useStore';

export const useFetchPlayer = () => {
  const { player, setPlayer, addSong, removeSong, updateSong } =
    usePlayerStore();

  useEffect(() => {
    fetchPlayer();

    onTokenUpdated((data) => {
      setSocketToken(data);
    });

    onPlayerUpdate((data) => {
      setPlayer(data);
    });

    onSongAdded((data) => {
      addSong(data);
    });

    onSongRemoved((data) => {
      removeSong(data);
    });

    onSongUpdated((data) => {
      updateSong(data);
    });

    return () => {
      setPlayer(null);
    };
  }, []);

  return player;
};
