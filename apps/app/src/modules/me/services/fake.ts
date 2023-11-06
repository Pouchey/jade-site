import { TGetMeResponse } from '_modules/me/types/request';

import fakeRequest from '_services/fake';

import { buildMe } from './build';

const fetchMe = () => fakeRequest<TGetMeResponse>(buildMe(), '/auth/me');

export default { fetchMe };
