import { TSongsGetResponse } from '_modules/song/types/request';

import { ESongListType, TSong } from '_shared/song/types';

export const TABS: ESongListType[] = [
  ESongListType.STARS,
  ESongListType.HOTS,
  ESongListType.FAVORITES,
];

export const formatSongPages = (pages?: TSongsGetResponse[]) => {
  if (!pages)
    return {
      items: [],
      lastItem: null,
    };

  const flattenSongs = pages?.reduce<TSong[]>((acc, page) => {
    acc.push(...page.items);
    return acc;
  }, []);

  const [items, lastItem] = [
    flattenSongs?.slice(0, -1),
    flattenSongs?.slice(-1)[0],
  ];

  return {
    items,
    lastItem: lastItem,
  };
};
