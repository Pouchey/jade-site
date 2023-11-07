import Image from '_components/image';

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
  return (
    <StyledSongItemWrapper>
      <StyledImageWrapper>
        <Image url={song.icon.url} alt={song.icon.alt} size={64} />
      </StyledImageWrapper>
      <StyledDesc>
        <StyledSongName>{song.songName}</StyledSongName>
        <StyledArtist>{song.artist}</StyledArtist>
      </StyledDesc>
    </StyledSongItemWrapper>
  );
};

export default Song;
