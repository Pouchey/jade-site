import { TUploadFileResponse } from '_modules/file/types/request';

import httpRequest from '_services/http';

const uploadFile = (file: File) => {
  const formData = new FormData();
  formData.append('file', file);
  return httpRequest.post<TUploadFileResponse>('/file', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

const deleteFile = (id: number) => httpRequest.delete(`/file/${id}`);

export default { uploadFile, deleteFile };
