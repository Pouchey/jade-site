import { TPlayer } from '../player/types';
import { TSong } from '../song/types';

export interface IServerToClient {
  tokenUpdated: (data: string) => void;
  playerUpdated: (data: TPlayer) => void;
  songAdded: (data: TSong) => void;
  songUpdated: (data: {
    songId: number;
    count: number;
    likes: string[];
  }) => void;
  songRemoved: (data: number) => void;
  playedReset: (data: TSong[]) => void;
}

export interface IClientToServer {
  fetchPlayer: () => void;
  setPseudo: (pseudo: string) => void;
  addSong: (songId: number) => void;
  likeSong: (songId: number) => void;
  dislikeSong: (songId: number) => void;
  nextSong: (songId: number) => void;
  resetPlayed: () => void;
}
