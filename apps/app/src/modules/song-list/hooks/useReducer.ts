import React from 'react';

import { ESongListType } from '_shared/song/types';

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
    case 'setType':
      return {
        ...state,
        type: payload.type,
      };
    default:
      return state;
  }
};

export default (defaultType?: ESongListType) =>
  React.useReducer(SongListReducer, { ...initialArgs, type: defaultType });
