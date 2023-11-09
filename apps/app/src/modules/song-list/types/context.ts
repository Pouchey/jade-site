import { ESongListType } from '_shared/song/types';

export interface SongListState {
  q?: string;
  pagination?: {
    page?: number;
    per_page?: number;
    total?: number;
  };
  type?: ESongListType;
}

export const DefaultSongListState = {
  q: '',
  pagination: {
    page: 1,
    per_page: 10,
    total: 0,
  },
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
        pagination: {
          page: number;
          per_page: number;
          total: number;
        };
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
