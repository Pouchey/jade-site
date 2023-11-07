import {
  TSongGetResponse,
  TSongPostRequest,
  TSongPostResponse,
} from '_modules/song/types/request';

import httpRequest from '_services/http';

const fetchSongs = () => httpRequest.get<TSongGetResponse[]>('/songs');

const fetchSong = (id: number) =>
  httpRequest.get<TSongGetResponse>(`/songs/${id}`);

const createSong = (formData: TSongPostRequest) =>
  httpRequest.post<TSongPostResponse>(`/songs`, formData);

const updateSong = (formData: TSongPostRequest) =>
  httpRequest.put<TSongPostResponse>(`/song`, formData);

export default { fetchSongs, fetchSong, createSong, updateSong };
