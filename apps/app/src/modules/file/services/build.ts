import { randInt } from '_utils/random';

import { TUploadFileResponse } from '../types/request';

export const buildFile = (id = randInt(1, 100000)): TUploadFileResponse => ({
  id,
  name: `File ${id}`,
  pathname: `https://picsum.photos/seed/${id}/200/200`,
  createdAt: new Date(),
});
