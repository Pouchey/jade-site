import AuthRequestFake from '_modules/auth/services/fake';
import AuthRequestHttp from '_modules/auth/services/http';
import PlayerRequestFake from '_modules/player/services/fake';
import PlayerRequestHttp from '_modules/player/services/http';
import SongRequestFake from '_modules/song/services/fake';
import SongRequestHttp from '_modules/song/services/http';

export const fakeAPI = {
  ...AuthRequestFake,
  ...PlayerRequestFake,
  ...SongRequestFake,
} as const;

export const httpAPI = {
  ...AuthRequestHttp,
  ...PlayerRequestHttp,
  ...SongRequestHttp,
} as const;

export default () =>
  import.meta.env.VITE_API_MODE === 'http' ? httpAPI : fakeAPI;
