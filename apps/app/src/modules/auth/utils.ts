import { AxiosError } from 'axios';

import httpRequest from '_services/http';

import {
  ACCESS_TOKEN_KEY,
  REFRESH_TOKEN_KEY,
  SOCKET_TOKEN_KEY,
} from '_shared/auth/types';

import { TRefreshResponse } from './types/request';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);
export const getRefreshToken = () => localStorage.getItem(REFRESH_TOKEN_KEY);
export const getSocketToken = () => localStorage.getItem(SOCKET_TOKEN_KEY);

export const setAccessToken = (token: string) =>
  localStorage.setItem(ACCESS_TOKEN_KEY, token);

export const setRefreshToken = (token: string) =>
  localStorage.setItem(REFRESH_TOKEN_KEY, token);

export const setSocketToken = (token: string) =>
  localStorage.setItem(SOCKET_TOKEN_KEY, token);

export const resetAccessToken = () => localStorage.removeItem(ACCESS_TOKEN_KEY);
export const resetRefreshToken = () =>
  localStorage.removeItem(REFRESH_TOKEN_KEY);
export const resetSocketToken = () => localStorage.removeItem(SOCKET_TOKEN_KEY);

export const isTokenExpiredError = (error: AxiosError) =>
  error?.response?.status === 401;

export const refreshTokenInterception = async (error: AxiosError) => {
  try {
    resetAccessToken();

    const refreshToken = getRefreshToken();

    if (!refreshToken || error?.config?.url === '/auth/refresh') {
      return Promise.reject(error);
    }

    const { data } = await httpRequest.post<TRefreshResponse>('/auth/refresh');

    if (!data) {
      return Promise.reject(error);
    }

    setAccessToken(data.accessToken);
    setRefreshToken(data.refreshToken);
    const config = error.config;

    const newHeaders = {
      ...config?.headers,
      Authorization: `Bearer ${data.accessToken}`,
    };

    return httpRequest.request({
      ...config,
      headers: newHeaders,
    });
  } catch (error) {
    resetAccessToken();
    resetRefreshToken();
    window.location.reload();
    return Promise.reject(error);
  }
};
