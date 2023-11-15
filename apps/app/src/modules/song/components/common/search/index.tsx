import React from 'react';

import Search from '_components/search';

import { useSongContext } from '_modules/song/hooks/useContext';
import { useFetchSongs } from '_modules/song/hooks/useServices';

import { StyledSearchWrapper } from './style';

const SongSearch = React.memo(() => {
  const { dispatch } = useSongContext();
  const { isRefetching } = useFetchSongs();

  const handleSearch = (value: string) => {
    dispatch({ type: 'setQ', payload: { q: value } });
  };
  return (
    <StyledSearchWrapper>
      <Search
        placeholder="Find a song..."
        onSearch={handleSearch}
        isLoading={isRefetching}
      />
    </StyledSearchWrapper>
  );
});

export default SongSearch;
