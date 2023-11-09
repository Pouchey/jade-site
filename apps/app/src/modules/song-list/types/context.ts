import { ESongListType } from '_shared/song/types';

export interface SongListState {
  q?: string;
  page?: number;
  perPage?: number;
  type?: ESongListType;
}

export const DefaultSongListState = {
  q: '',
  page: 1,
  perPage: 10,
  type: ESongListType.HOTS,
};

export type SongListActionType =
  | {
      type: 'setQ';
      payload: {
        q: string;
      };
    }
  | {
      type: 'setPagination';
      payload: {
        page: number;
        perPage: number;
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
