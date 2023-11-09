import React from 'react';

import {
  SongListContextInterface,
  DefaultSongListContext,
} from '_modules/song-list/types/context';

import { ESongListType } from '_shared/song/types';

import useSongListReducer from './useReducer';

const SongListContext = React.createContext<SongListContextInterface>(
  DefaultSongListContext,
);

SongListContext.displayName = 'SongList';

// eslint-disable-next-line react-refresh/only-export-components
export const useSongListContext = () => React.useContext(SongListContext);

type ProviderProps = {
  children: React.ReactNode;
  defaultType?: ESongListType;
};

export const SongListProvider = ({ children, defaultType }: ProviderProps) => {
  const [state, dispatch] = useSongListReducer(defaultType);
  const value = { state, dispatch };

  return (
    <SongListContext.Provider value={value}>
      {children}
    </SongListContext.Provider>
  );
};
