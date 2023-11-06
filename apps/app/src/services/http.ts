import axios, { AxiosError } from 'axios';

import {
  getAccessToken,
  isTokenExpiredError,
  refreshTokenInterception,
} from '_modules/auth/utils';

const httpRequest = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/`,
  data: {},
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-Key-Inflection': 'camel',
  },
});

export const initHttpRequest = () => {
  httpRequest.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
