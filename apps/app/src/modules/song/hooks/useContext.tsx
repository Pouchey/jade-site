import React from 'react';

import {
  SongContextInterface,
  DefaultSongContext,
} from '_modules/song/types/context';

import { ESongListType } from '_shared/song/types';

import useSongReducer from './useReducer';

const SongContext =
  React.createContext<SongContextInterface>(DefaultSongContext);

SongContext.displayName = 'Song';

// eslint-disable-next-line react-refresh/only-export-components
export const useSongContext = () => React.useContext(SongContext);

type ProviderProps = {
  children: React.ReactNode;
  defaultType?: ESongListType;
};

export const SongProvider = ({ children, defaultType }: ProviderProps) => {
  const [state, dispatch] = useSongReducer(defaultType);
  const value = { state, dispatch };

  return <SongContext.Provider value={value}>{children}</SongContext.Provider>;
};
