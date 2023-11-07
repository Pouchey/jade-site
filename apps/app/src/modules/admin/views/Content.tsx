import React, { useState } from 'react';

import SongForm from '_modules/song/components/create/form';
import { useCreateSong } from '_modules/song/hooks/useServices';
import { TSongForm } from '_modules/song/types/form';

import AddSong from './add-song';
import SelectSong from './select-song';
import { StyledContainer } from './style';

const Content = React.memo(() => {
  const { mutate: createSong, isPending } = useCreateSong();
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (formData: TSongForm) => {
    createSong(formData);
  };

  const handleCreateSong = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <StyledContainer>
      <AddSong handleClick={handleCreateSong} />
      <SelectSong />
      {isOpen && (
        <SongForm
          isLoading={isPending}
          onSubmit={handleSubmit}
          onClose={handleClose}
        />
      )}
    </StyledContainer>
  );
});

export default Content;
