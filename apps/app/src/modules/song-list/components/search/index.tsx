import React from 'react';

import Search from '_components/search';

import { StyledSearchWrapper } from './style';

const SongSearch = React.memo(() => {
  const handleSearch = (searchValue: string) => {
    console.log(searchValue);
  };
  return (
    <StyledSearchWrapper>
      <Search placeholder="Find a song..." onSearch={handleSearch} />
    </StyledSearchWrapper>
  );
});

export default SongSearch;
