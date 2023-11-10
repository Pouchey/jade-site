import { ESongListType } from '_shared/song/types';

export interface SongListState {
  q?: string;
  type?: ESongListType;
}

export const DefaultSongListState = {
  q: '',
};

export type SongListActionType =
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

export interface SongListContextInterface {
  state: SongListState;
  dispatch: React.Dispatch<SongListActionType>;
}

export const DefaultSongListContext = {
  state: DefaultSongListState,
  dispatch: () => undefined,
};
