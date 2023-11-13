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
import { useFetchPlayer } from '_modules/player/hooks/useServices';

interface Props {
  song: TSong;
  onClick: (song: TSong) => void;
}

const SelectSong = ({ song, onClick }: Props) => {
  const imageUrl = getImageUrl(song.icon);
  const player = useFetchPlayer();

  const requestedSong = player?.songs.find(s => s.id === song.id);

  const handleClick = () => {
    onClick(song);
  };

  return (
    <StyledSongItemWrapper onClick={handleClick} $requested={!!requestedSong}>
      <StyledImageWrapper>
        <Image url={imageUrl} alt={song.title} size={64} />
      </StyledImageWrapper>
      <StyledInformationWrapper>
        <StyledDesc>
          <StyledSongName>{song.title}</StyledSongName>
          {requestedSong && (
            <StyledRequester>
              <Icon glyph="heart" size={18} color={'red1'} />
              <p>{requestedSong.count}</p>
              <span>Requested {requestedSong.requester?.name && "by " + requestedSong.requester?.name}</span>
            </StyledRequester>
          )}
          <StyledArtist>{song.artist}</StyledArtist>
        </StyledDesc>
      </StyledInformationWrapper>
    </StyledSongItemWrapper>
  );
};

export default SelectSong;
