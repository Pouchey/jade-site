import { useQuery } from 'react-query';

import { useAuthContext } from '_modules/auth/hooks/useContext';

import getAPI from '_services/api';

const api = getAPI();

export const useFetchMe = () => {
  const { dispatch } = useAuthContext();

  return useQuery(
    ['me'],
    async () => {
      const { data } = await api.fetchMe();
      return data;
    },
    {
      staleTime: Infinity,
      refetchOnMount: false,
      retry: false,
      refetchOnWindowFocus: false,
      onError: () => {
        dispatch({ type: 'disconnect' });
      },
    },
  );
};
