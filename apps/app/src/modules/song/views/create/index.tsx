import React from 'react';
import { useNavigate } from 'react-router-dom';

import SongForm from '_modules/song/components/form';
import { useCreateSong } from '_modules/song/hooks/useServices';
import { TSongForm } from '_modules/song/types/form';

const CreateForm = React.memo(() => {
  const { mutate: createSong, isPending } = useCreateSong();
  const navigate = useNavigate();

  const handleSubmit = (formData: TSongForm) => {
    createSong(formData);
    handleClose();
  };

  const handleClose = () => {
    navigate('/admin');
  };

  return (
    <SongForm
      isLoading={isPending}
      onSubmit={handleSubmit}
      onClose={handleClose}
    />
  );
});

export default CreateForm;
