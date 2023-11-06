import { useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

import onPlayerUpdate from '_modules/player/services/socket';

import getAPI from '_services/api';

const api = getAPI();

export const useFetchPlayer = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    onPlayerUpdate((data) => {
      queryClient.setQueryData(['player'], data);
    });
  }, []);

  return useQuery({
    queryKey: ['player'],
    queryFn: async () => {
      const { data } = await api.fetchPlayer();

      return data;
    },
    refetchOnWindowFocus: false,
  });
};
