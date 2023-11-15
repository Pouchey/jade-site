import Image from '_components/image';

import { getImageUrl } from '_modules/file/utils';

import { TSong } from '_shared/song/types';

import { StyledImageWrapper, StyledInformationWrapper } from '../style';

import {
  StyledClickableSongItemWrapper,
  StyledSelectArtist,
  StyledSelectDesc,
  StyledSongName,
} from './style';

interface Props {
  children?: React.ReactNode;
  song: TSong;
  isSelected?: boolean;
  onClick: (song: number) => void;
}

const Selectable = ({ children, song, isSelected, onClick }: Props) => {
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
          {children}
          {/* {requested && (
            <StyledRequester>
              <Icon glyph="heart" size={18} color={'red1'} />
              <p>{song.count}</p>
              <span>
                Requested
                {requested.requester?.name &&
                  ' by ' + requested.requester?.name}
              </span>
            </StyledRequester>
          )} */}
          <StyledSelectArtist>{song.artist}</StyledSelectArtist>
        </StyledSelectDesc>
      </StyledInformationWrapper>
    </StyledClickableSongItemWrapper>
  );
};

export default Selectable;
