import { TFile } from '../../file/types';
import { TListener } from '../../listener/types';

export type TSong = {
  id: number;
  title: string;
  artist: string;
  createdAt: Date;
  isVisible: boolean;
  icon: TFile;
  iconId: number;
  count?: number;
  requester?: {
    id: string;
    name: string;
  };
  likes?: string[];
};

export enum ESongListType {
  STARS = 'stars',
  HOTS = 'hots',
  FAVORITES = 'favorites',
}
