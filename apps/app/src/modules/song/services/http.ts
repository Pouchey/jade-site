import {
  TSongGetResponse,
  TSongPostRequest,
  TSongPostResponse,
  TSongPutResponse,
  TSongPutRequest,
  TSongDeleteResponse,
} from '_modules/song/types/request';

import httpRequest from '_services/http';

const fetchSongs = () => httpRequest.get<TSongGetResponse[]>('/songs');

const fetchSong = (id: number) =>
  httpRequest.get<TSongGetResponse>(`/songs/${id}`);

const createSong = (formData: TSongPostRequest) =>
  httpRequest.post<TSongPostResponse>(`/songs`, formData);

const updateSong = (formData: TSongPutRequest) =>
  httpRequest.put<TSongPutResponse>(`/songs/${formData.id}`, formData);

const deleteSong = (id: number) =>
  httpRequest.delete<TSongDeleteResponse>(`/songs/${id}`);

export default { fetchSongs, fetchSong, createSong, updateSong, deleteSong };
