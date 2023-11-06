import { useMutation } from 'react-query';

import getAPI from '_services/api';

import { TSongForm } from '../types/form';

const api = getAPI();

export const useAdmin = () => {
  return useMutation(
    async (formData: TSongForm) => {
      const { data } = await api.addSong(formData);
      return data;
    },
    {
      onSuccess: () => {},
      onError: () => {},
    },
  );
};
