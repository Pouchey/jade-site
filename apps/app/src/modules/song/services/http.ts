import httpRequest from '_services/http';

import { TSong } from '_shared/song/types';

const fetchSongs = () => httpRequest.get<TSong[]>('/songs');

const fetchSong = (id: number) => httpRequest.get<TSong>(`/songs/${id}`);

export default { fetchSongs, fetchSong };
