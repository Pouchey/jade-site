import { Socket } from 'socket.io';

export type TListener = {
  id: string;
  name: string;
  socket: Socket | null;
};
