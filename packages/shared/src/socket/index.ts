import { TPlayer } from '../player/types';
import { TSong } from '../song/types';

export interface IServerToClient {
  playerUpdated: (data: TPlayer) => void;
  songAdded: (data: TSong) => void;
  songUpdated: (data: { songId: number; count: number }) => void;
}

export interface IClientToServer {
  fetchPlayer: () => void;
  addSong: (songId: number) => void;
  likeSong: (songId: number) => void;
}
