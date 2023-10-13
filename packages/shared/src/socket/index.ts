import { TSong } from '../song/types';

export interface IServerToClient {
  player: (data: TSong) => void;
}

export interface IClientToServer {}
