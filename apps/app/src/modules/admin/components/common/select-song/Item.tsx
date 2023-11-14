import { useParams } from 'react-router-dom';

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

  const params = useParams();
  const songId = parseInt(params.id!, 10);

  const isSelected = songId === song.id;

  return (
    <Song
      key={song.id}
      type="admin"
      song={song}
      isSelected={isSelected}
      onClick={handleClick}
    />
  );
};

export default Item;
