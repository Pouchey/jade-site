import React from 'react';

import { DefaultSongState, SongAction, SongState } from '../types/context';

const initialArgs = DefaultSongState;

const SongReducer = (state: SongState, action: SongAction) => {
  switch (action.type.value) {
    case 'setCreateOpen':
      return {
        ...state,
        isCreateOpen: action.payload.isCreateOpen,
        isUpdateOpen: false,
      };
    case 'setUpdateOpen':
      return {
        ...state,
        isUpdateOpen: action.payload.isUpdateOpen,
        isCreateOpen: false,
        song: action.payload.song,
      };
    case 'setSongId':
      return {
        ...state,
        song: action.payload.song,
      };
  }
};

export default () =>
  React.useReducer(SongReducer, {
    ...initialArgs,
    song: null,
    isCreateOpen: false,
    isUpdateOpen: false,
  });
