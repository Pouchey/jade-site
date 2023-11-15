import { TSong } from '_shared/song/types';

import Likeable from './likeable';
import Selectable from './selectable';

interface Props {
  children?: React.ReactNode;
  type: 'selectable' | 'likeable';
  song: TSong;
  isSelected?: boolean;
  isLiked?: boolean;
  onClick: (id: number) => void;
  onPlay?: (id: number) => void;
}

const Song = ({
  children,
  type,
  song,
  isSelected,
  isLiked,
  onClick,
  onPlay,
}: Props) => {
  return (
    <>
      {type === 'likeable' && (
        <Likeable
          song={song}
          onClick={onClick}
          onPlay={onPlay}
          isLiked={isLiked}
        >
          {children}
        </Likeable>
      )}
      {type === 'selectable' && (
        <Selectable song={song} isSelected={isSelected} onClick={onClick}>
          {children}
        </Selectable>
      )}
    </>
  );
};

export default Song;
