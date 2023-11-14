import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Loader from '_components/loader';

import { useDeleteFile } from '_modules/file/hooks/useServices';
import SongForm from '_modules/song/components/form';
import { useDeleteSong, useUpdateSong } from '_modules/song/hooks/useServices';
import { useFetchSong } from '_modules/song/hooks/useServices';
import { TSongForm } from '_modules/song/types/form';

const UpdateForm = React.memo(() => {
  const navigate = useNavigate();
  const params = useParams();
  const songId = parseInt(params.id!, 10);
  const { mutate: updateSong, isPending } = useUpdateSong();

  const deleteSong = useDeleteSong();

  const { data: song } = useFetchSong(songId);

  const getDefaultValues = () => {
    if (!song) return;
    return {
      id: song?.id,
      song: song?.title,
      artist: song?.artist,
      icon: song?.icon,
      isVisible: song?.isVisible,
    };
  };

  const { mutate: deleteFile } = useDeleteFile();

  const handleClose = () => {
    navigate('/admin');
  };

  const handleSubmit = (formData: TSongForm) => {
    if (song?.icon && formData?.file) deleteFile(song?.icon.id);
    updateSong(formData);
    handleClose();
  };

  const handleDelete = (id?: number) => {
    if (id != undefined) deleteSong.mutate(id);
    handleClose();
  };

  if (!song) return <Loader />;

  return (
    <SongForm
      key={song.id}
      isLoading={isPending || deleteSong.isPending}
      onSubmit={handleSubmit}
      onClose={handleClose}
      onDelete={handleDelete}
      defaultValues={getDefaultValues()}
    />
  );
});

export default UpdateForm;
