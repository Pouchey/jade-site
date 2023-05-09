import { SongType } from '_modules/song/types';

import fakeRequest from '_services/fake';

import { buildPlayer } from './build';

const fetchPlayer = () => fakeRequest<SongType>(buildPlayer(), '/songs');

export default { fetchPlayer };
