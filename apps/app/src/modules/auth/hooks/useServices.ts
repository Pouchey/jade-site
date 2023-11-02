import { useMutation } from 'react-query';

import { TAuthForm } from '_modules/auth/types/form';
import { TLoginResponse } from '_modules/auth/types/request';
import { setAccessToken, resetAccessToken } from '_modules/auth/utils';

import getAPI from '_services/api';

import { useAuthContext } from './useContext';

const api = getAPI();

export const useLogin = () => {
  const { dispatch } = useAuthContext();

  return useMutation(
    async (formData: TAuthForm) => {
      const { data } = await api.login(formData);
      return data;
    },
    {
      onSuccess: (data: TLoginResponse) => {
        setAccessToken(data.accessToken);
        dispatch({ type: 'setIsLogged' });
      },
      onError: () => {
        resetAccessToken();
      },
    },
  );
};
