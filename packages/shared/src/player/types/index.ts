import { TSong } from '../../song/types';

export type TPlayer = {
  current: TSong | null;
  songs: TSong[];
};
