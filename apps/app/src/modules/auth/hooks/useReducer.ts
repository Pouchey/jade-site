import React from 'react';

import {
  AuthActionType,
  AuthState,
  DefaultAuthState,
} from '_modules/auth/types/context';

import { getAccessToken } from '../utils';

const initialArgs = DefaultAuthState;

const AuthReducer = (state: AuthState, { type }: AuthActionType) => {
  switch (type) {
    case 'disconnect':
      return {
        ...state,
        isLogged: false,
      };
    case 'setIsLogged':
      return {
        ...state,
        isLogged: true,
      };
  }
};

export default () =>
  React.useReducer(AuthReducer, {
    ...initialArgs,
    isLogged: !!getAccessToken(),
  });
