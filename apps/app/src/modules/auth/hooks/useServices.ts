import { useMutation, useQueryClient } from 'react-query';
import { useLocation, useNavigate } from 'react-router-dom';

import { TAuthForm } from '_modules/auth/types/form';
import { TLoginResponse } from '_modules/auth/types/request';
import {
  setAccessToken,
  resetAccessToken,
  setRefreshToken,
  resetRefreshToken,
} from '_modules/auth/utils';

import getAPI from '_services/api';

import { useAuthContext } from './useContext';

const api = getAPI();

export const useLogin = () => {
  const { dispatch } = useAuthContext();

  const locationState = useLocation().state as { from: string };
  const navigate = useNavigate();

  return useMutation(
    async (formData: TAuthForm) => {
      const { data } = await api.login(formData);
      return data;
    },
    {
      onSuccess: (data: TLoginResponse) => {
        setAccessToken(data.accessToken);
        setRefreshToken(data.refreshToken);
        dispatch({ type: 'setIsLogged' });
        navigate(locationState?.from || '/', { replace: true });
      },
      onError: () => {
        resetAccessToken();
      },
    },
  );
};

export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  return useMutation(
    async () => {
      await api.logout();
    },
    {
      onSettled: () => {
        queryClient.clear();
        resetAccessToken();
        resetRefreshToken();

        dispatch({ type: 'disconnect' });
        navigate('/login', { replace: true });
      },
    },
  );
};
