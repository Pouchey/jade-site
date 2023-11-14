import { TListener } from '@jaderowley/shared/src/listener/types';
import { TPlayer } from '@jaderowley/shared/src/player/types';
import { v4 as uuidv4 } from 'uuid';

export const initPlayer = (): TPlayer => ({
  current: null,
  songs: [],
});

export const createListener = (socketId: string): TListener => {
  return {
    token: uuidv4(),
    name: '',
    socketId: socketId,
  };
};
