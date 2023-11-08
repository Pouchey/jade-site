import { randInt } from '_utils/random';

export const buildFile = (id = randInt(1, 100000)): TUploadFileResponse => ({
  id,
  name: `File ${id}`,
  pathname: `https://picsum.photos/seed/${id}/200/200`,
});
