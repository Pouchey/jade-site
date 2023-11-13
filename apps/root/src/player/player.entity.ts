import { TListener } from '@jaderowley/shared/src/listener/types';
import { TPlayer } from '@jaderowley/shared/src/player/types';
import { Socket } from 'socket.io';
import { v4 as uuidv4 } from 'uuid';

export const initPlayer = (): TPlayer => ({
  current: null,
  songs: [],
});

export const createListener = (socket: Socket): TListener => {
  return {
    token: uuidv4(),
    name: '',
    socketId: socket.id,
  };
};
