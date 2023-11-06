import React from 'react';

import SongForm from '_modules/song/components/create/form';
import { useCreateSong } from '_modules/song/hooks/useServices';
import { TSongForm } from '_modules/song/types/form';

import AddSong from './add-song';
import SelectSong from './select-song';
import { StyledContainer } from './style';

const Content = React.memo(() => {
  const { mutate: createSong, isPending } = useCreateSong();

  const handleSubmit = (formData: TSongForm) => {
    createSong(formData);
  };

  return (
    <StyledContainer>
      <AddSong />
      <SelectSong />
      <SongForm isLoading={isPending} onSubmit={handleSubmit} />
    </StyledContainer>
  );
});

export default Content;
