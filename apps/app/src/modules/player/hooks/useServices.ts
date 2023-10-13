import { useQuery } from 'react-query';

import getAPI from '_services/api';

const api = getAPI();

export const useFetchPlayer = () => {
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
