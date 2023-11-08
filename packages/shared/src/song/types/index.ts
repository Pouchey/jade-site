export type TSong = {
  id: number;
  title: string;
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
