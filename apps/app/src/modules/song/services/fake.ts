import fakeRequest from '_services/fake';

import { TSong } from '../types';

import { buildSong, buildSongs } from './build';

const fetchSongs = () => fakeRequest<TSong[]>(buildSongs(), '/songs');
const fetchSong = (id: number) =>
  fakeRequest<TSong>(buildSong(), `/songs/${id}`);

export default { fetchSongs, fetchSong };
