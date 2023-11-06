import {
  TSongPostResponse,
  TSongGetResponse,
  TSongPostRequest,
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

export default { fetchSongs, fetchSong, createSong };
