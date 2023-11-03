import axios, { AxiosError } from 'axios';

import { resetAccessToken } from '_modules/auth/utils';

const httpRequest = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api/v1/`,
  data: {},
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'X-Key-Inflection': 'camel',
  },
});

export const initHttpRequest = () => {
  httpRequest.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  httpRequest.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error?.response?.status === 401) {
        resetAccessToken();
        window.location.href = '/login';
      }
      return Promise.reject(error);
    },
  );
};

export default httpRequest;
