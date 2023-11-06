import { useQuery } from '@tanstack/react-query';

import getAPI from '_services/api';

const api = getAPI();

export const useFetchMe = () => {
  return useQuery({
    queryKey: ['me'],
    queryFn: async () => {
      const { data } = await api.fetchMe();
      return data;
    },
    staleTime: Infinity,
    refetchOnMount: false,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
