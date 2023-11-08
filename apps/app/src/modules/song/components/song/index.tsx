import Image from '_components/image';

import { getImageUrl } from '_modules/file/utils';

import { TSong } from '_shared/song/types';

import {
  StyledArtist,
  StyledDesc,
  StyledImageWrapper,
  StyledSongItemWrapper,
  StyledSongName,
} from './style';

interface Props {
  song: TSong;
}

const Song = ({ song }: Props) => {
  const imageUrl = getImageUrl(song.icon);

  return (
    <StyledSongItemWrapper>
      <StyledImageWrapper>
        <Image url={imageUrl} alt={song.title} size={64} />
      </StyledImageWrapper>
      <StyledDesc>
        <StyledSongName>{song.title}</StyledSongName>
        <StyledArtist>{song.artist}</StyledArtist>
      </StyledDesc>
    </StyledSongItemWrapper>
  );
};

export default Song;
