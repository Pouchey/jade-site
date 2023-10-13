import { io, Socket } from 'socket.io-client';

import { IClientToServer, IServerToClient } from '_shared/socket';

const socketUrl = import.meta.env.VITE_SOCKET_URL as string;

const socket: Socket<IServerToClient, IClientToServer> = io(socketUrl);

export default socket;
