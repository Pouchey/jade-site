import React from 'react';

import { useDeleteFile } from '_modules/file/hooks/useServices';
import SongForm from '_modules/song/components/form';
import { useSongContext } from '_modules/song/hooks/useContext';
import { useDeleteSong, useUpdateSong } from '_modules/song/hooks/useServices';
import { useFetchSong } from '_modules/song/hooks/useServices';
import { TSongForm } from '_modules/song/types/form';

const UpdateForm = React.memo(() => {
  const { state, dispatch } = useSongContext();
  const { mutate: updateSong, isPending } = useUpdateSong();

  const deleteSong = useDeleteSong();

  if (!state.song) throw new Error('Song is undefined');
  const { data: song } = useFetchSong(state.song);

  if (!song) throw new Error('Song is undefined');
  const defaultValues = {
    id: song.id,
    song: song.title,
    artist: song.artist,
    icon: song.icon,
    isVisible: song.isVisible,
  };

  const { mutate: deleteFile } = useDeleteFile();

  const handleSubmit = (formData: TSongForm) => {
    if (song?.icon && formData?.file) deleteFile(song?.icon.id);

    updateSong(formData);
    handleClose();
  };

  const handleClose = () => {
    dispatch({
      type: { value: 'setUpdateOpen' },
      payload: { isUpdateOpen: false },
    });
  };

  const handleDelete = (id?: number) => {
    if (id != undefined) deleteSong.mutate(id);
    handleClose();
  };

  return (
    <SongForm
      key={song.id}
      isLoading={isPending || deleteSong.isPending}
      onSubmit={handleSubmit}
      onClose={handleClose}
      onDelete={handleDelete}
      defaultValues={defaultValues}
    />
  );
});

export default UpdateForm;
