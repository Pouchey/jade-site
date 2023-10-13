import httpRequest from '_services/http';

import { TPlayer } from '_shared/player/types';

const fetchPlayer = () => httpRequest.get<TPlayer>('/songs');

export default { fetchPlayer };
