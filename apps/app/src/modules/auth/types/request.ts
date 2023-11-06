import { TAuthForm } from './form';

export type TLoginResponse = {
  accessToken: string;
  refreshToken: string;
};

export type TLoginRequest = TAuthForm;
