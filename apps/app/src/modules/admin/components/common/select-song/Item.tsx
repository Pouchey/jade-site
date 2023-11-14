import Song from '_modules/song/components/common/song';

import { TSong } from '_shared/song/types';

interface Props {
  song: TSong;
  onClick: (song: number) => void;
}

const Item = ({ song, onClick }: Props) => {
  const handleClick = (song: number) => {
    onClick(song);
  };

  return (
    <div>
      <Song key={song.id} song={song} onClick={handleClick} />
    </div>
  );
};

export default Item;
