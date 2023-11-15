import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { useSongContext } from '_modules/song/hooks/useContext';
import { TSongForm } from '_modules/song/types/form';

import getAPI from '_services/api';

import { generateQueryParams } from '_utils/queryParams';

const api = getAPI();

const DEFAULT_PAGE_SIZE = 10;

export const useFetchSongs = () => {
  const { state } = useSongContext();

  const { q, type } = state;

  const params = {
    q,
    perPage: DEFAULT_PAGE_SIZE,
    type,
  };

  return useInfiniteQuery({
    queryKey: ['songs', q, type],
    queryFn: async ({ pageParam }) => {
      const queryParams = generateQueryParams({
        ...params,
        page: pageParam,
      });

      const { data } = await api.fetchSongs(queryParams);

      return data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { next } = lastPage.meta;

      if (!next) {
        return undefined;
      }

      return next;
    },
  });
};

export const useFetchVisibleSongs = () => {
  const { state } = useSongContext();

  const { q, type } = state;

  const params = {
    q,
    perPage: DEFAULT_PAGE_SIZE,
    type,
  };

  return useInfiniteQuery({
    queryKey: ['songs', q, type],
    queryFn: async ({ pageParam }) => {
      const queryParams = generateQueryParams({
        ...params,
        page: pageParam,
      });

      const { data } = await api.fetchVisibleSongs(queryParams);

      return data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const { next } = lastPage.meta;

      if (!next) {
        return undefined;
      }

      return next;
    },
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
