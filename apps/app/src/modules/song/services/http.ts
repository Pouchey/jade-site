import httpRequest from '_services/http';

import { SongType } from '../types';

const fetchSongs = () => httpRequest.get<SongType[]>('/songs');

const fetchSong = (id: number) => httpRequest.get<SongType>(`/songs/${id}`);

export default { fetchSongs, fetchSong };
