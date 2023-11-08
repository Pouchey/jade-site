import React from 'react';

import SongForm from '_modules/song/components/form';
import { useSongContext } from '_modules/song/hooks/useContext';
import { useUpdateSong } from '_modules/song/hooks/useServices';
import { TSongForm } from '_modules/song/types/form';
import { TSong } from '_shared/song/types';

const UpdateForm = React.memo(() => {
  const { state, dispatch } = useSongContext();
  const { mutate: updateSong, isPending } = useUpdateSong();


  let defaultValues = undefined;

  if (state.song) {
    defaultValues = {
      id: state.song.id,
      song: state.song.title,
      artist: state.song.artist,
      image: state.song.icon,
    };
  }

  const handleSubmit = (formData: TSongForm) => {
    updateSong(formData);
  };


  const handleClose = () => {
    dispatch({
      type: { value: 'setUpdateOpen' },
      payload: { isUpdateOpen: false },
    });
  };

  return (
    <SongForm
      isLoading={isPending}
      onSubmit={handleSubmit}
      onClose={handleClose}
      defaultValues={defaultValues}
    />
  );
});

export default UpdateForm;
