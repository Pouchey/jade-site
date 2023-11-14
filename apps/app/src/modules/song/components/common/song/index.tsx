import Button from '_components/button';
import Counter from '_components/counter';
import Icon from '_components/icon';
import Image from '_components/image';

import { useAuthContext } from '_modules/auth/hooks/useContext';
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
  StyledIconContainer,
} from './style';

interface Props {
  song: TSong;
  onClick: (id: number) => void;
  onPlay?: (id: number) => void;
}

const Song = ({ song, onClick, onPlay }: Props) => {
  const imageUrl = getImageUrl(song.icon);
  const isLiked = song.likes?.find((like) => like === getSocketToken());
  const { state } = useAuthContext();

  const isLogged = state.isLogged;

  const handleClick = () => {
    onClick(song.id);
  };

  const handlePlay = () => {
    if (onPlay) onPlay(song.id);
  };

  return (
    <StyledSongItemWrapper>
      <StyledImageWrapper>
        <Image url={imageUrl} alt={song.title} size={64} />
      </StyledImageWrapper>
      <StyledInformationWrapper>
        <StyledDesc>
          <StyledSongName>
            <span>{song.title}</span>
          </StyledSongName>
          <StyledArtist>{song.artist}</StyledArtist>
        </StyledDesc>
        <StyledCountWrapper>
          {isLogged && (
            <StyledIconContainer onClick={handlePlay}>
              <Icon glyph="playCircle" size={32} />
            </StyledIconContainer>
          )}
          <Counter onClick={handleClick} count={song.count} liked={!!isLiked} />
        </StyledCountWrapper>
      </StyledInformationWrapper>
    </StyledSongItemWrapper>
  );
};

export default Song;
