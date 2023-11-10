import { TPlayer } from '../player/types';
import { TSong } from '../song/types';

export interface IServerToClient {
  playerUpdated: (data: TPlayer) => void;
  songAdded: (data: TSong) => void;
}

export interface IClientToServer {
  fetchPlayer: () => void;
  addSong: (songId: number) => void;
}
