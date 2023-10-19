import { useState } from 'react';

export const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  const saveToken = (userToken: string) => {
    localStorage.setItem('token', userToken);
    setToken(userToken);
  };

  const getToken = () => {
    const userToken = localStorage.getItem('token');
    if (!userToken) {
      return null;
    }
    return userToken;
  };

  return {
    setToken: saveToken,
    getToken,
  };
};
