export type TSong = {
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
