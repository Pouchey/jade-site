import React from 'react';

import { ESongListType } from '_shared/song/types';

import { DefaultSongState, SongActionType, SongState } from '../types/context';

const initialArgs = DefaultSongState;

const SongReducer = (state: SongState, { type, payload }: SongActionType) => {
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
  React.useReducer(SongReducer, { ...initialArgs, type: defaultType });
