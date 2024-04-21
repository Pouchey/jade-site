import { io, Socket } from 'socket.io-client';

import { TPlayer } from '_shared/player/types';
import { IClientToServer, IServerToClient } from '_shared/socket';

const socketUrl = import.meta.env.VITE_SOCKET_URL as string;
const apiUrl = import.meta.env.VITE_API_URL as string;

const socket: Socket<IServerToClient, IClientToServer> = io(socketUrl);

const fetchPlayer = () => {
  socket.emit('fetchPlayer');
};

const onPlayerUpdate = (callback: (data: TPlayer) => void) => {
  socket.on('playerUpdated', callback);
};

const PlayerElement = document.getElementById('player') as HTMLDivElement;

const setPlayer = (player: TPlayer) => {
  console.log(player);

  if (!player?.current) {
    PlayerElement.innerHTML = `
      <p>Nothing is playing</p>
    `;
    return;
  }

  const imageSource = apiUrl + player.current.icon.pathname;
  PlayerElement.innerHTML = `
      <img src="${imageSource}" alt="Album Art" style="width: 64px; height: 64px; object-fit: cover; border-radius: 8px"/>
      <p>${player.current?.artist}</p>
      -
      <p>${player.current?.title}</p>
      
  `;
};

fetchPlayer();
onPlayerUpdate(setPlayer);
