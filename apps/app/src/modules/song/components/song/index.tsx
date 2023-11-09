import Counter from '_components/counter';
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
  StyledCountWrapper,
} from './style';

interface Props {
  song: TSong;
}

const Song = ({ song }: Props) => {
  const imageUrl = getImageUrl(song.icon);
  const isRequested = song.requester?.id === 1;

  return (
    <StyledSongItemWrapper>
      <StyledImageWrapper>
        <Image url={imageUrl} alt={song.title} size={64} />
      </StyledImageWrapper>
      <StyledInformationWrapper>
        <StyledDesc>
          <StyledSongName>{song.title}</StyledSongName>
          <StyledArtist>{song.artist}</StyledArtist>
        </StyledDesc>
        <StyledCountWrapper>
          <Counter count={song.count} requested={isRequested} />
        </StyledCountWrapper>
      </StyledInformationWrapper>
    </StyledSongItemWrapper>
  );
};

export default Song;
