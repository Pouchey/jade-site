import { TGetMeRequest, TGetMeResponse } from '_modules/me/types/request';

import httpRequest from '_services/http';

const fetchMe = (formData: TGetMeRequest) =>
  httpRequest.post<TGetMeResponse>('/me', formData);

export default { fetchMe };
