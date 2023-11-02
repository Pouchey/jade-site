import { TLoginResponse, TLoginRequest } from '_modules/auth/types/request';

import fakeRequest from '_services/fake';

import { buildLogin } from './build';

const login = (formData: TLoginRequest) =>
  fakeRequest<TLoginResponse, TLoginRequest>(
    buildLogin(),
    '/auth/login',
    formData,
  );

export default { login };
