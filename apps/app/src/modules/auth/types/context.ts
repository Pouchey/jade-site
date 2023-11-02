export interface AuthState {
  isLogged: boolean;
}
export const DefaultAuthState = {
  isLogged: false,
};

export type AuthActionType = {
  type: 'setIsLogged' | 'disconnect';
};

export interface AuthContextInterface {
  state: AuthState;
  dispatch: React.Dispatch<AuthActionType>;
}
export const DefaultAuthContext = {
  state: DefaultAuthState,
  dispatch: () => undefined,
};
