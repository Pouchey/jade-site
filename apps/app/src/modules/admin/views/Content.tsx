import React from 'react';

import SongForm from '../components/form';
import { useAdmin } from '../hooks/useServices';
import { TSongForm } from '../types/form';

import AddSong from './add-song';
import SelectSong from './select-song';
import { StyledContainer } from './style';

const Content = React.memo(() => {
  const { mutate, isLoading } = useAdmin();

  const handleSubmit = (formData: TSongForm) => {
    mutate(formData);
  };

  return (
    <StyledContainer>
      <AddSong />
      <SelectSong />
      <SongForm isLoading={isLoading} onSubmit={handleSubmit} />
    </StyledContainer>
  );
});

export default Content;
