import * as SongRequestFake from '_modules/song/services/fake';
import * as SongRequestHttp from '_modules/song/services/http';

export const fakeAPI = {
  ...SongRequestFake,
}.default;

export const httpAPI = {
  ...SongRequestHttp,
}.default;

export default () =>
  import.meta.env.VITE_API_MODE === 'http' ? httpAPI : fakeAPI;
