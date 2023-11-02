import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';

import onPlayerUpdate from '_modules/player/services/socket';

import getAPI from '_services/api';

const api = getAPI();

export const useFetchPlayer = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    onPlayerUpdate((data) => {
      queryClient.setQueryData('player', data);
    });
  }, []);

  return useQuery(
    'player',
    async () => {
      const { data } = await api.fetchPlayer();

      return data;
    },
    {
      refetchOnWindowFocus: false,
    },
  );
};
