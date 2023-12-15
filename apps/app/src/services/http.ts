import axios, { AxiosError } from 'axios';

import {
  getAccessToken,
  getRefreshToken,
  isTokenExpiredError,
  refreshTokenInterception,
} from '_modules/auth/utils';

const httpRequest = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/`,
  data: {},
  // withCredentials: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'X-Key-Inflection': 'camel',
  },
});

export const initHttpRequest = () => {
  httpRequest.interceptors.request.use((config) => {
    const accessToken = getAccessToken();
    const refreshToken = getRefreshToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    if (!accessToken && refreshToken) {
      config.headers.Authorization = `Bearer ${refreshToken}`;
    }

    return config;
  });

  httpRequest.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (isTokenExpiredError(error)) {
        return refreshTokenInterception(error);
      }
      return Promise.reject(error);
    },
  );
};

export default httpRequest;
