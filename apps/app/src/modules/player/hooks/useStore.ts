import { create } from 'zustand';

import { TPlayer } from '_shared/player/types';
import { TSong } from '_shared/song/types';

interface PlayerState {
  player: TPlayer | null;
  setPlayer: (player: TPlayer | null) => void;
  addSong: (song: TSong) => void;
  removeSong: (songId: number) => void;
  updateSong: ({
    songId,
    count,
    likes,
  }: {
    songId: number;
    count: number;
    likes: string[];
  }) => void;
}

const usePlayerStore = create<PlayerState>((set) => ({
  player: null,
  setPlayer: (player) => set({ player }),
  addSong: (song) =>
    set((state) => {
      if (!state.player) return state;
      const newSongs = [...state.player.songs, song];
      return {
        player: {
          ...state.player,
          songs: newSongs,
        },
      };
    }),
  removeSong: (songId) =>
    set((state) => {
      if (!state.player) return state;
      const newSongs = state.player.songs.filter((song) => song.id !== songId);
      return {
        player: {
          ...state.player,
          songs: newSongs,
        },
      };
    }),
  updateSong: ({ songId, count, likes }) =>
    set((state) => {
      if (!state.player) return state;
      let newSongs;
      if (count > 0) {
        newSongs = state.player.songs.map((song) =>
          song.id === songId ? { ...song, count, likes } : song,
        );
      } else {
        newSongs = state.player.songs.filter((song) => song.id !== songId);
      }

      return {
        player: {
          ...state.player,
          songs: newSongs,
        },
      };
    }),
}));

export default usePlayerStore;
