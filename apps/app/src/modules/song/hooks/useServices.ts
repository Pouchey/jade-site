import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { TSongForm } from '_modules/song/types/form';

import getAPI from '_services/api';

const api = getAPI();

export const useFetchSongs = () => {
  return useQuery({
    queryKey: ['songs'],
    queryFn: async () => {
      const { data } = await api.fetchSongs();

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
