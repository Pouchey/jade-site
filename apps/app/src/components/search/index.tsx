import React, { useCallback, useState } from 'react';

import Icon from '_components/icon';
import Loader from '_components/loader';

import debounce from '_utils/debounce';

import { StyledSearch } from './style';

interface SearchProps {
  placeholder?: string;
  isLoading?: boolean;
  onSearch: (searchValue: string) => void;
}

const Search = ({
  placeholder = 'Rechercher...',
  isLoading = false,
  onSearch,
}: SearchProps) => {
  const [searchValue, setSearchValue] = useState('');

  const debounceHandle = debounce(onSearch, 200);

  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    debounceHandle(e.target.value);
  }, []);

  const callSearchFunction = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch(searchValue);
    }
  };

  return (
    <StyledSearch>
      <input
        value={searchValue}
        onChange={handleSearch}
        onKeyDown={callSearchFunction}
        type="text"
        placeholder={placeholder}
      />
      {isLoading ? <Loader size={16} /> : <Icon glyph="search" size={24} />}
    </StyledSearch>
  );
};

export default Search;
