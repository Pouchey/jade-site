import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { setSocketToken } from '_modules/auth/utils';
import {
  fetchPlayer,
  onPlayerUpdate,
  onSongAdded,
  onSongUpdated,
  onTokenUpdated,
  onSongRemoved,
} from '_modules/player/services/socket';

import usePlayerStore from './useStore';

export const useFetchPlayer = () => {
  const navigate = useNavigate();
  const { player, setPlayer, addSong, removeSong, updateSong } =
    usePlayerStore();

  useEffect(() => {
    fetchPlayer();

    onTokenUpdated((data) => {
      setSocketToken(data);
    });

    onPlayerUpdate((data) => {
      setPlayer(data);

      const pseudo = localStorage.getItem('pseudo');

      if (!pseudo) navigate('/pseudo');
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
