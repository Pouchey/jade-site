import { TSongRequest } from '_modules/admin/types/request';

import httpRequest from '_services/http';

import { TSong } from '_shared/song/types';

const fetchSongs = () => httpRequest.get<TSong[]>('/songs');

const fetchSong = (id: number) => httpRequest.get<TSong>(`/songs/${id}`);

const addSong = () => httpRequest.post<TSongRequest>(`/song`);

export default { fetchSongs, fetchSong, addSong };
