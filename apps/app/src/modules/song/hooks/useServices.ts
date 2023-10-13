import { useQuery } from 'react-query';

import getAPI from '_services/api';

const api = getAPI();

export const useFetchSongs = () => {
  return useQuery(
    'songs',
    async () => {
      const { data } = await api.fetchSongs();

      return data;
    },
    {
      refetchOnWindowFocus: false,
    },
  );
};

export const useFetchSong = (id: number) => {
  return useQuery(['song', id], async () => {
    const { data } = await api.fetchSong(id);
    return data;
  });
};
