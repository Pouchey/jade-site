import React from 'react';

import Song from '_modules/song/components/song';

import { TSong } from '_shared/song/types';

interface Props {
  song: TSong;
  onClick: (song: TSong) => void;
}

const Item = ({ song, onClick }: Props) => {
  const handleClick = (song: TSong) => {
    onClick(song);
  };
  return (
    <div>
      <Song key={song.id} song={song} onClick={handleClick} />
    </div>
  );
};

export default Item;
