import { TSong } from '_shared/song/types';

export interface SongState {
  song?: TSong | null;
  isCreateOpen?: boolean;
  isUpdateOpen?: boolean;
}

export const DefaultSongState = {
  song: null,
  isCreateOpen: false,
  isUpdateOpen: false,
};

export type SongActionType = {
  value: 'setCreateOpen' | 'setUpdateOpen' | 'setSongId';
};

export interface SongAction {
  type: SongActionType;
  payload: SongState;
}

export interface SongContextInterface {
  state: SongState;
  dispatch: React.Dispatch<SongAction>;
}

export const DefaultSongContext = {
  state: DefaultSongState,
  dispatch: () => undefined,
};
