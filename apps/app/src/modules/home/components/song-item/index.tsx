import Counter from '_components/counter';
import Image from '_components/image';
import Label from '_components/label';

import { SongProps } from '_modules/song/types';

import {
  StyledArtist,
  StyledCountWrapper,
  StyledDesc,
  StyledImageWrapper,
  StyledInformationWrapper,
  StyledSongItemWrapper,
  StyledSongName,
} from './style';

const SongItem = ({ song }: SongProps) => {
  const isRequested = song.requester.id === 1;

  return (
    <StyledSongItemWrapper>
      <StyledImageWrapper>
        <Image url={song.icon.url} alt={song.icon.alt} size={64} />
      </StyledImageWrapper>
      <StyledInformationWrapper>
        <StyledDesc>
          <StyledSongName>{song.songName}</StyledSongName>
          <StyledArtist>{song.artist}</StyledArtist>
        </StyledDesc>
        {song.requester && (
          <Label content={`Requested by ${song.requester.name}`} />
        )}
      </StyledInformationWrapper>
      <StyledCountWrapper>
        <Counter count={song.count} requested={isRequested} />
      </StyledCountWrapper>
    </StyledSongItemWrapper>
  );
};

export default SongItem;
