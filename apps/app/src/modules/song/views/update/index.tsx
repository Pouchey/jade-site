import React from 'react';

import SongForm from '_modules/song/components/form';
import { useSongContext } from '_modules/song/hooks/useContext';
import { useUpdateSong } from '_modules/song/hooks/useServices';
import { TSongForm } from '_modules/song/types/form';

const UpdateForm = React.memo(() => {
  const { mutate: updateSong, isPending } = useUpdateSong();
  const { state, dispatch } = useSongContext();

  let defaultValues = undefined;

  if (state.song) {
    defaultValues = {
      song: state.song.songName,
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
