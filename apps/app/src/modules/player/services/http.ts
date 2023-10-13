import { TSong } from '_modules/song/types';

import httpRequest from '_services/http';

const fetchPlayer = () => httpRequest.get<TSong>('/songs');

export default { fetchPlayer };
