import React from 'react';

import SongForm from '_modules/song/components/form';
import { useSongContext } from '_modules/song/hooks/useContext';
import { useDeleteSong, useUpdateSong } from '_modules/song/hooks/useServices';
import { TSongForm } from '_modules/song/types/form';

const UpdateForm = React.memo(() => {
  const { state, dispatch } = useSongContext();
  const { mutate: updateSong, isPending } = useUpdateSong(state.song?.id);

  const deleteSong = useDeleteSong();

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
    handleClose()
  };

  const handleClose = () => {
    dispatch({
      type: { value: 'setUpdateOpen' },
      payload: { isUpdateOpen: false },
    });
  };

  const handleDelete = (id?: number) => {
    if(id != undefined)
      deleteSong.mutate(id);
      handleClose()
  }

  return (
    <SongForm
      isLoading={isPending || deleteSong.isPending}
      onSubmit={handleSubmit}
      onClose={handleClose}
      onDelete={handleDelete}
      defaultValues={defaultValues}
    />
  );
});

export default UpdateForm;
