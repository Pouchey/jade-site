import { randInt } from '_utils/random';

import { TSong } from '../types';

export const buildSong = (id = randInt(1, 100000)): TSong => {
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

export const buildSongs = (nb = randInt(10, 100)): TSong[] => {
  const songs = [];
  for (let i = 0; i < nb; i++) {
    songs.push(buildSong());
  }
  return songs;
};
