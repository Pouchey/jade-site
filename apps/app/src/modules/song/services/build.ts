import { buildFile } from '_modules/file/services/build';

import { randInt } from '_utils/random';

import { TSongGetResponse, TSongListGetResponse } from '../types/request';

export const buildSong = (id = randInt(1, 100000)): TSongGetResponse => {
  return {
    id,
    title: `Song ${id}`,
    artist: `Artist ${id}`,
    iconId: randInt(1, 100000),
    icon: buildFile(),
    count: randInt(1, 10),
    createdAt: new Date(),
    isVisible: true,
    requester: {
      id: randInt(1, 100000),
      name: `User ${randInt(1, 100000)}`,
    },
  };
};

export const buildSongs = (nb = randInt(10, 100)): TSongListGetResponse => {
  const songs = [];
  for (let i = 0; i < nb; i++) {
    songs.push(buildSong());
  }
  return {
    items: songs,
    meta: {
      currentPage: 1,
      lastPage: 1,
      perPage: 10,
      total: songs.length,
      prev: null,
      next: null,
    },
  };
};
