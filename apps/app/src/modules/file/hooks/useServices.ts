import { useMutation } from '@tanstack/react-query';

import { TUploadFileResponse } from '_modules/file/types/request';

import getAPI from '_services/api';

const api = getAPI();

export const useUploadfile = () => {
  return useMutation({
    mutationFn: async (file: File) => {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const { data } = await api.uploadFile(file);
      return data as TUploadFileResponse;
    },
  });
};

export const useDeleteFile = () => {
  return useMutation({
    mutationFn: async (id: number) => {
      await api.deleteFile(id);
    },
  });
};
