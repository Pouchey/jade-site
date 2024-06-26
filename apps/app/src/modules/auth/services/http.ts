import { TLoginResponse, TLoginRequest } from '_modules/auth/types/request';

import httpRequest from '_services/http';

const login = (formData: TLoginRequest) =>
  httpRequest.post<TLoginResponse>('/auth/login', formData);

const logout = () => httpRequest.post('/auth/logout');

export default { login, logout };
