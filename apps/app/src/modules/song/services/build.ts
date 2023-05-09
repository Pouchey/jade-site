import { randInt } from '_utils/random';

import { SongType } from '../types';

export const buildSong = (id = randInt(1, 100000)): SongType => {
  return {
    id,
    songName: `Song ${id}`,
    artist: `Artist ${id}`,
    icon: {
      url: `https://picsum.photos/seed/${id}/200/200`,
      alt: `Song ${id}`,
    },
    count: randInt(1, 10),
    requester: {
      id: randInt(1, 100000),
      name: `User ${randInt(1, 100000)}`,
    },
  };
};

export const buildSongs = (nb = randInt(10, 100)): SongType[] => {
  const songs = [];
  for (let i = 0; i < nb; i++) {
    songs.push(buildSong());
  }
  return songs;
};
