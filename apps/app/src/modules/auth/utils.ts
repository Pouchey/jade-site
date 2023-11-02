export const ACCESS_TOKEN_KEY = 'access-token';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_KEY);

export const setAccessToken = (token: string) =>
  localStorage.setItem(ACCESS_TOKEN_KEY, token);

export const resetAccessToken = () => localStorage.removeItem(ACCESS_TOKEN_KEY);
