import {
  TSongPostResponse,
  TSongGetResponse,
  TSongPostRequest,
  TSongPutRequest,
  TSongPutResponse,
} from '_modules/song/types/request';

import fakeRequest from '_services/fake';

import { buildSong, buildSongs } from './build';

const fetchSongs = () =>
  fakeRequest<TSongGetResponse[]>(buildSongs(), '/songs');
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

export default { fetchSongs, fetchSong, createSong, updateSong };
