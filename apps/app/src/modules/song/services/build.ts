import { buildFile } from '_modules/file/services/build';

import { randInt } from '_utils/random';

import { TSongGetResponse } from '../types/request';

export const buildSong = (id = randInt(1, 100000)): TSongGetResponse => {
  return {
    id,
    title: `Song ${id}`,
    artist: `Artist ${id}`,
    iconId: randInt(1, 100000),
    icon: buildFile(),
    count: randInt(1, 10),
    createdAt: new Date(),
    requester: {
      id: randInt(1, 100000),
      name: `User ${randInt(1, 100000)}`,
    },
  };
};

export const buildSongs = (nb = randInt(10, 100)): TSongGetResponse[] => {
  const songs = [];
  for (let i = 0; i < nb; i++) {
    songs.push(buildSong());
  }
  return songs;
};
