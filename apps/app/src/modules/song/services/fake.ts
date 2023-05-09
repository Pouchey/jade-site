import fakeRequest from '_services/fake';

import { buildSong, buildSongs } from './build';
import { SongType } from '../types';

const fetchSongs = () => fakeRequest<SongType[]>(buildSongs(), '/songs');
const fetchSong = (id: number) =>
  fakeRequest<SongType>(buildSong(), `/songs/${id}`);

export default { fetchSongs, fetchSong };
