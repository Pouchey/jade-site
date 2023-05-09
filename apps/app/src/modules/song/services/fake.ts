import fakeRequest from '_services/fake';

import { SongType } from '../types';

import { buildSong, buildSongs } from './build';

const fetchSongs = () => fakeRequest<SongType[]>(buildSongs(), '/songs');
const fetchSong = (id: number) =>
  fakeRequest<SongType>(buildSong(), `/songs/${id}`);

export default { fetchSongs, fetchSong };
