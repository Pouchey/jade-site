import socket from '_services/socket';

import { TPlayer } from '_shared/player/types';
import { TSong } from '_shared/song/types';

const onTokenUpdated = (callback: (data: string) => void) => {
  socket.on('tokenUpdated', callback);
};

const onPlayerUpdate = (callback: (data: TPlayer) => void) => {
  socket.on('playerUpdated', callback);
};

const onPlayedReset = (callback: (data: TSong[]) => void) => {
  socket.on('playedReset', callback);
}

const onSongAdded = (callback: (data: TSong) => void) => {
  socket.on('songAdded', callback);
};

const onSongRemoved = (callback: (data: number) => void) => {
  socket.on('songRemoved', callback);
};

const onSongUpdated = (
  callback: (data: { songId: number; count: number; likes: string[] }) => void,
) => {
  socket.on('songUpdated', callback);
};

const fetchPlayer = () => {
  socket.emit('fetchPlayer');
};

const resetPlayed = () => {
  socket.emit('resetPlayed');
}

const setPseudo = (pseudo: string) => {
  socket.emit('setPseudo', pseudo);
};

const addSongToQueue = (songId: number) => {
  socket.emit('addSong', songId);
};

const likeSong = (songId: number) => {
  socket.emit('likeSong', songId);
};

const dislikeSong = (songId: number) => {
  socket.emit('dislikeSong', songId);
};

const nextSong = (songId: number) => {
  socket.emit('nextSong', songId);
};

export {
  onTokenUpdated,
  onPlayerUpdate,
  onPlayedReset,
  onSongAdded,
  onSongRemoved,
  onSongUpdated,
  fetchPlayer,
  resetPlayed,
  setPseudo,
  addSongToQueue,
  likeSong,
  dislikeSong,
  nextSong,
};
