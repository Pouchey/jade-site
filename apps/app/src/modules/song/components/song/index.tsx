import Counter from '_components/counter';
import Image from '_components/image';

import { getSocketToken } from '_modules/auth/utils';
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
  onClick: (id: number) => void;
}

const Song = ({ song, onClick }: Props) => {
  const imageUrl = getImageUrl(song.icon);
  const isLiked = song.likes?.find(like => like === getSocketToken())

  const handleClick = () => {
    onClick(song.id);
  };

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
          <Counter
            onClick={handleClick}
            count={song.count}
            liked={!!isLiked}
          />
        </StyledCountWrapper>
      </StyledInformationWrapper>
    </StyledSongItemWrapper>
  );
};

export default Song;
