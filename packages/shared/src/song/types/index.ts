import { TFile } from '../../file/types';

export type TSong = {
  id: number;
  title: string;
  artist: string;
  icon: TFile;
  count: number;
  requester: {
    id: number;
    name: string;
  };
};
