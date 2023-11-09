import { TFile } from '../../file/types';

export type TSong = {
  id: number;
  title: string;
  artist: string;
  createdAt: Date;
  icon: TFile;
  iconId: number;
  count?: number;
  requester?: {
    id: number;
    name: string;
  };
};

export enum ESongListType {
  STARS = 'stars',
  HOTS = 'hots',
  FAVORITES = 'favorites',
}
