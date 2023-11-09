import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { useSongListContext } from '_modules/song-list/hooks/useContext';
import { TSongForm } from '_modules/song/types/form';

import getAPI from '_services/api';

import { generateQueryParams } from '_utils/queryParams';

const api = getAPI();

export const useFetchSongs = () => {
  const { state } = useSongListContext();

  const { q, pagination, type } = state;

  const params = {
    q,
    pagination,
    type,
  };

  const queryParams = generateQueryParams(params);

  return useQuery({
    queryKey: ['songs'],
    queryFn: async () => {
      const { data } = await api.fetchSongs(queryParams);

      return data;
    },
    refetchOnWindowFocus: false,
  });
};

export const useFetchSong = (id: number) => {
  return useQuery({
    queryKey: ['songs', id],
    queryFn: async () => {
      const { data } = await api.fetchSong(id);
      return data;
    },
  });
};

export const useCreateSong = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: TSongForm) => {
      const { data } = await api.createSong(formData);
      return data;
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['songs'] });
    },
  });
};

export const useUpdateSong = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData: TSongForm) => {
      const { data } = await api.updateSong(formData);
      return data;
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['songs'] });
    },
  });
};

export const useDeleteSong = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => {
      const { data } = await api.deleteSong(id);
      return data;
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['songs'] });
    },
  });
};
