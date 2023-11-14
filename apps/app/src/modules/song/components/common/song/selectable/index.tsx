import { useParams } from 'react-router-dom';

import Icon from '_components/icon';
import Image from '_components/image';

import { getImageUrl } from '_modules/file/utils';
import usePlayerStore from '_modules/player/hooks/useStore';

import { TSong } from '_shared/song/types';

import { StyledImageWrapper, StyledInformationWrapper } from '../style';

import {
  StyledClickableSongItemWrapper,
  StyledRequester,
  StyledSelectArtist,
  StyledSelectDesc,
  StyledSongName,
} from './style';

interface Props {
  song: TSong;
  type: 'admin' | 'songlist';
  isSelected?: boolean;
  onClick: (song: number) => void;
}

const Selectable = ({ song, type, isSelected, onClick }: Props) => {
  const imageUrl = getImageUrl(song.icon);

  const handleClick = () => {
    onClick(song.id);
  };

  return (
    <StyledClickableSongItemWrapper
      onClick={isSelected ? undefined : handleClick}
      $selected={!!isSelected}
    >
      <StyledImageWrapper>
        <Image url={imageUrl} alt={song.title} size={64} />
      </StyledImageWrapper>
      <StyledInformationWrapper>
        <StyledSelectDesc>
          <StyledSongName>{song.title}</StyledSongName>
          {type === 'songlist' && song && (
            <StyledRequester>
              <Icon glyph="heart" size={18} color={'red1'} />
              <p>{song.count}</p>
              <span>
                Requested {song.requester?.name && 'by ' + song.requester?.name}
              </span>
            </StyledRequester>
          )}
          <StyledSelectArtist>{song.artist}</StyledSelectArtist>
        </StyledSelectDesc>
      </StyledInformationWrapper>
    </StyledClickableSongItemWrapper>
  );
};

export default Selectable;
