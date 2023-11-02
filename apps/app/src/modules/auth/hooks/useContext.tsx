import React from 'react';

import {
  AuthContextInterface,
  DefaultAuthContext,
} from '_modules/auth/types/context';

import useAuthReducer from './useReducer';

const AuthContext =
  React.createContext<AuthContextInterface>(DefaultAuthContext);
AuthContext.displayName = 'Auth';

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => React.useContext(AuthContext);

type ProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider = ({ children }: ProviderProps) => {
  const [state, dispatch] = useAuthReducer();
  const value = { state, dispatch };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
