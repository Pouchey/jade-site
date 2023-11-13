import { useEffect } from 'react';

import {
  onPlayerUpdate,
  fetchPlayer,
  onSongAdded,
  onSongUpdated,
} from '_modules/player/services/socket';

import usePlayerStore from './useStore';

export const useFetchPlayer = () => {
  const { player, setPlayer, addSong, updateSong } = usePlayerStore();

  console.log(player);

  useEffect(() => {
    fetchPlayer();

    onPlayerUpdate((data) => {
      setPlayer(data);
    });

    onSongAdded((data) => {
      addSong(data);
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
