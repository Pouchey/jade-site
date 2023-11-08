import fakeRequest from '_services/fake';

import { buildFile } from './build';

const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return fakeRequest(buildFile(), '/file', formData);
};

const deleteFile = (id: number) => fakeRequest(null, `/file/${id}`);

export default { uploadFile, deleteFile };
