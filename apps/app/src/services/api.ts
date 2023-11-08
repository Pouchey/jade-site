import AuthRequestFake from '_modules/auth/services/fake';
import AuthRequestHttp from '_modules/auth/services/http';
import FileRequestFake from '_modules/file/services/fake';
import FileRequestHttp from '_modules/file/services/http';
import MeRequestFake from '_modules/me/services/fake';
import MeRequestHttp from '_modules/me/services/http';
import PlayerRequestFake from '_modules/player/services/fake';
import PlayerRequestHttp from '_modules/player/services/http';
import SongRequestFake from '_modules/song/services/fake';
import SongRequestHttp from '_modules/song/services/http';

import { initHttpRequest } from './http';

if (import.meta.env.VITE_API_MODE === 'http') initHttpRequest();

export const fakeAPI = {
  ...AuthRequestFake,
  ...FileRequestFake,
  ...MeRequestFake,
  ...PlayerRequestFake,
  ...SongRequestFake,
} as const;

export const httpAPI = {
  ...AuthRequestHttp,
  ...FileRequestHttp,
  ...MeRequestHttp,
  ...PlayerRequestHttp,
  ...SongRequestHttp,
} as const;

export default () =>
  import.meta.env.VITE_API_MODE === 'http' ? httpAPI : fakeAPI;
