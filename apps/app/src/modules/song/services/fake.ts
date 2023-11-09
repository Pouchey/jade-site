import {
  TSongPostResponse,
  TSongGetResponse,
  TSongPostRequest,
  TSongPutRequest,
  TSongPutResponse,
  TSongDeleteResponse,
} from '_modules/song/types/request';

import fakeRequest from '_services/fake';

import { buildSong, buildSongs } from './build';

const fetchSongs = (queryParams: string) =>
  fakeRequest<TSongGetResponse[]>(buildSongs(), `/songs?${queryParams}`);

const fetchSong = (id: number) =>
  fakeRequest<TSongGetResponse>(buildSong(), `/songs/${id}`);

const createSong = (formData: TSongPostRequest) =>
  fakeRequest<TSongPostResponse, TSongPostRequest>(
    buildSong(),
    '/songs',
    formData,
  );

const updateSong = (formData: TSongPostRequest) =>
  fakeRequest<TSongPutResponse, TSongPutRequest>(
    buildSong(),
    `/songs`,
    formData,
  );

const deleteSong = (id: number) =>
  fakeRequest<TSongDeleteResponse, number>(buildSong(), `/songs/${id}`);

export default { fetchSongs, fetchSong, createSong, updateSong, deleteSong };
