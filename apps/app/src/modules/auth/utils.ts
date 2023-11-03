import { AxiosError } from 'axios';

export const ACCESS_TOKEN_KEY = 'access-token';
export const REFRESH_TOKEN_KEY = 'refresh-token';

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
