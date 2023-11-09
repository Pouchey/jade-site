import React from 'react';

import {
  SongListContextInterface,
  DefaultSongListContext,
} from '_modules/song-list/types/context';

import useSongListReducer from './useReducer';

const SongListContext = React.createContext<SongListContextInterface>(
  DefaultSongListContext,
);

SongListContext.displayName = 'SongList';

// eslint-disable-next-line react-refresh/only-export-components
export const useSongListContext = () => React.useContext(SongListContext);

type ProviderProps = {
  children: React.ReactNode;
};

export const SongListProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useSongListReducer();
  const value = { state, dispatch };

  return (
    <SongListContext.Provider value={value}>
      {children}
    </SongListContext.Provider>
  );
};
