import React from 'react';

import {
  DefaultSongListState,
  SongListActionType,
  SongListState,
} from '../types/context';

const initialArgs = DefaultSongListState;

const SongListReducer = (
  state: SongListState,
  { type, payload }: SongListActionType,
) => {
  switch (type) {
    case 'setQ':
      return {
        ...state,
        q: payload.q,
      };

    case 'setPagination':
      return {
        ...state,
        pagination: payload.pagination,
      };
    case 'setType':
      return {
        ...state,
        type: payload.type,
      };
    default:
      return state;
  }
};

export default () => React.useReducer(SongListReducer, { ...initialArgs });
