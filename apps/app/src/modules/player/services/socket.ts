import socket from '_services/socket';

import { TPlayer } from '_shared/player/types';
import { TSong } from '_shared/song/types';

const onTokenUpdated = (callback: (data: string) => void) => {
  socket.on('tokenUpdated', callback);
};

const onPlayerUpdate = (callback: (data: TPlayer) => void) => {
  socket.on('playerUpdated', callback);
};

const onSongAdded = (callback: (data: TSong) => void) => {
  socket.on('songAdded', callback);
};

const onSongUpdated = (
  callback: (data: { songId: number; count: number }) => void,
) => {
  socket.on('songUpdated', callback);
};

const fetchPlayer = () => {
  socket.emit('fetchPlayer');
};

const addSongToQueue = (songId: number) => {
  socket.emit('addSong', songId);
};

const likeSong = (songId: number) => {
  socket.emit('likeSong', songId);
};

export {
  onTokenUpdated,
  onPlayerUpdate,
  onSongAdded,
  onSongUpdated,
  fetchPlayer,
  addSongToQueue,
  likeSong,
};
