import socket from '_services/socket';

import { TPlayer } from '_shared/player/types';
import { TSong } from '_shared/song/types';

const onPlayerUpdate = (callback: (data: TPlayer) => void) => {
  socket.on('playerUpdated', callback);
};

const onSongAdded = (callback: (data: TSong) => void) => {
  socket.on('songAdded', callback);
};

const fetchPlayer = () => {
  socket.emit('fetchPlayer');
};

const addSongToQueue = (songId: number) => {
  socket.emit('addSong', songId);
};

export { onPlayerUpdate, onSongAdded, fetchPlayer, addSongToQueue };
