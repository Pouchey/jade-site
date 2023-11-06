import { AxiosError } from 'axios';

import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from '_shared/auth/types';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);

export const setAccessToken = (token: string) =>
  localStorage.setItem(ACCESS_TOKEN_KEY, token);

export const setRefreshToken = (token: string) =>
  localStorage.setItem(REFRESH_TOKEN_KEY, token);

export const resetAccessToken = () => localStorage.removeItem(ACCESS_TOKEN_KEY);
export const resetRefreshToken = () =>
  localStorage.removeItem(REFRESH_TOKEN_KEY);

export const isTokenExpiredError = (error: AxiosError) =>
  error?.response?.status === 401;

export const refreshTokenInterception = async (error: AxiosError) => {
  const { response } = error;
  const refreshToken = getRefreshToken();

  console.log(response);
};
