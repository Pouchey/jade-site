import PlayerRequestFake from '_modules/player/services/fake';
import PlayerRequestHttp from '_modules/player/services/http';
import SongRequestFake from '_modules/song/services/fake';
import SongRequestHttp from '_modules/song/services/http';

export const fakeAPI = {
  ...SongRequestFake,
  ...PlayerRequestFake,
} as const;

export const httpAPI = {
  ...SongRequestHttp,
  ...PlayerRequestHttp,
} as const;

export default () =>
  import.meta.env.VITE_API_MODE === 'http' ? httpAPI : fakeAPI;
