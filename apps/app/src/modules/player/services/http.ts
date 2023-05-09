import { SongType } from '_modules/song/types';

import httpRequest from '_services/http';

const fetchPlayer = () => httpRequest.get<SongType>('/songs');

export default { fetchPlayer };
