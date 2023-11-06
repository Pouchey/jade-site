import { TSongRequest } from '_modules/admin/types/request';

import fakeRequest from '_services/fake';

import { buildSong } from './build';

const addSong = (formData: TSongRequest) =>
  fakeRequest<TSongRequest>(buildSong(), '/song', formData);

export default { addSong };
