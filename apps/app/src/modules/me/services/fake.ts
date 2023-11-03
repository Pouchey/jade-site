import { TGetMeRequest, TGetMeResponse } from '_modules/me/types/request';

import fakeRequest from '_services/fake';

import { buildMe } from './build';

const fetchMe = (formData: TGetMeRequest) =>
  fakeRequest<TGetMeResponse, TGetMeRequest>(buildMe(), '/me', formData);

export default { fetchMe };
