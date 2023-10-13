import fakeRequest from '_services/fake';

import { TPlayer } from '_shared/player/types';

import { buildPlayer } from './build';

const fetchPlayer = () => fakeRequest<TPlayer>(buildPlayer(), '/songs');

export default { fetchPlayer };
