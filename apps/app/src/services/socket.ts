import { io, Socket } from 'socket.io-client';

import { getSocketToken } from '_modules/auth/utils';

import { IClientToServer, IServerToClient } from '_shared/socket';

const socketUrl = import.meta.env.VITE_SOCKET_URL as string;

const socket: Socket<IServerToClient, IClientToServer> = io(socketUrl, {
  auth: {
    token: getSocketToken(),
  },
});

export default socket;
