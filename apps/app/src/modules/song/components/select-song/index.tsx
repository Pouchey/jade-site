import Icon from '_components/icon';
import Image from '_components/image';

import { getImageUrl } from '_modules/file/utils';

import { TSong } from '_shared/song/types';

import {
  StyledArtist,
  StyledDesc,
  StyledImageWrapper,
  StyledInformationWrapper,
  StyledSongItemWrapper,
  StyledSongName,
  StyledRequester,
} from './style';

interface Props {
  song: TSong;
  onClick: (song: TSong) => void;
}

const SelectSong = ({ song, onClick }: Props) => {
  const imageUrl = getImageUrl(song.icon);
  const isRequested = song.requester;

  const handleClick = () => {
    onClick(song);
  };

  return (
    <StyledSongItemWrapper onClick={handleClick} $requested={!!isRequested}>
      <StyledImageWrapper>
        <Image url={imageUrl} alt={song.title} size={64} />
      </StyledImageWrapper>
      <StyledInformationWrapper>
        <StyledDesc>
          <StyledSongName>{song.title}</StyledSongName>
          {isRequested && (
            <StyledRequester>
              <Icon glyph="heart" size={18} color={'red1'} />
              <p>{song.count}</p>
              <span>Requested by {song.requester?.name}</span>
            </StyledRequester>
          )}
          <StyledArtist>{song.artist}</StyledArtist>
        </StyledDesc>
      </StyledInformationWrapper>
    </StyledSongItemWrapper>
  );
};

export default SelectSong;
