import { TGetMeResponse } from '_modules/me/types/request';

import httpRequest from '_services/http';

const fetchMe = () => httpRequest.get<TGetMeResponse>('/auth/me');

export default { fetchMe };
