export type SongType = {
  id: number;
  songName: string;
  artist: string;
  icon: {
    url: string;
    alt: string;
  };
  count: number;
  requester: {
    id: number;
    name: string;
  };
};

export interface SongProps {
  song: SongType;
}
