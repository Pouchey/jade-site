import { useParams } from 'react-router-dom';

import Artist from '_modules/song/components/common/artist';
import Title from '_modules/song/components/common/title';
import Song from '_modules/song/views/detail';

import { TSong } from '_shared/song/types';

import { StyledDesc } from './style';

interface Props {
  song: TSong;
  onClick: (songId: number) => void;
}

const Item = ({ song, onClick }: Props) => {
  const handleClick = (songId: number) => {
    onClick(songId);
  };

  const params = useParams();
  const songId = parseInt(params.id!, 10);

  const isSelected = songId === song.id;

  return (
    <Song
      key={song.id}
      song={song}
      isSelected={isSelected}
      onSelect={handleClick}
    >
      <StyledDesc>
        <Title title={song.title} />
        <Artist artist={song.artist} />
      </StyledDesc>
    </Song>
  );
};

export default Item;
