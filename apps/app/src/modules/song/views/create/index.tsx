import React from 'react';

import SongForm from '_modules/song/components/form';
import { useSongContext } from '_modules/song/hooks/useContext';
import { useCreateSong } from '_modules/song/hooks/useServices';
import { TSongForm } from '_modules/song/types/form';

const CreateForm = React.memo(() => {
  const { mutate: createSong, isPending } = useCreateSong();
  const { dispatch } = useSongContext();

  const handleSubmit = (formData: TSongForm) => {
    createSong(formData);
  };

  const handleClose = () => {
    dispatch({
      type: { value: 'setCreateOpen' },
      payload: { isCreateOpen: false },
    });
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
