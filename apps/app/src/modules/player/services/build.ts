import { buildSong } from '_modules/song/services/build';

export const buildPlayer = () => ({
  current: buildSong(),
  songs: [buildSong(), buildSong(), buildSong()],
});
