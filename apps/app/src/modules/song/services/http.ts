import {
  TSongGetResponse,
  TSongPostRequest,
  TSongPostResponse,
  TSongPutResponse,
  TSongPutRequest,
  TSongDeleteResponse,
} from '_modules/song/types/request';

import httpRequest from '_services/http';

const fetchSongs = (queryParams: string) =>
  httpRequest.get<TSongGetResponse[]>(`/songs?${queryParams}`);

const fetchSong = (id: number) =>
  httpRequest.get<TSongGetResponse>(`/songs/${id}`);

const createSong = (formData: TSongPostRequest) =>
  httpRequest.post<TSongPostResponse>(`/songs`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

const updateSong = (formData: TSongPutRequest) =>
  httpRequest.put<TSongPutResponse>(`/songs/${formData.id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

const deleteSong = (id: number) =>
  httpRequest.delete<TSongDeleteResponse>(`/songs/${id}`);

export default { fetchSongs, fetchSong, createSong, updateSong, deleteSong };
