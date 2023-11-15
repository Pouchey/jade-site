import { ESongListType } from '_shared/song/types';

export interface SongState {
  q?: string;
  type?: ESongListType;
}

export const DefaultSongState = {
  q: '',
};

export type SongActionType =
  | {
      type: 'setQ';
      payload: {
        q: string;
      };
    }
  | {
      type: 'setType';
      payload: {
        type: ESongListType;
      };
    };

export interface SongContextInterface {
  state: SongState;
  dispatch: React.Dispatch<SongActionType>;
}

export const DefaultSongContext = {
  state: DefaultSongState,
  dispatch: () => undefined,
};
