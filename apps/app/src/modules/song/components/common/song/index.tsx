import Requested from '_modules/song/components/common/song/requested';

import { TSong } from '_shared/song/types';

import Selectable from './selectable';

interface Props {
  type: 'admin' | 'songlist' | 'player';
  song: TSong;
  isSelected?: boolean;
  onClick: (id: number) => void;
  onPlay?: (id: number) => void;
}

const Song = ({ type, song, isSelected, onClick, onPlay }: Props) => {
  return (
    <>
      {type === 'player' && (
        <Requested song={song} onClick={onClick} onPlay={onPlay} />
      )}
      {(type === 'admin' || type === 'songlist') && (
        <Selectable
          song={song}
          type={type}
          isSelected={isSelected}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default Song;
