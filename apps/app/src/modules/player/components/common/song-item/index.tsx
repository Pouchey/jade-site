import Counter from '_components/counter';
import Image from '_components/image';
import Label from '_components/label';

import { getImageUrl } from '_modules/file/utils';

import { TSong } from '_shared/song/types';

import {
  StyledArtist,
  StyledCountWrapper,
  StyledDesc,
  StyledImageWrapper,
  StyledInformationWrapper,
  StyledSongItemWrapper,
  StyledSongName,
} from './style';

interface Props {
  song: TSong;
}

const SongItem = ({ song }: Props) => {
  const isRequested = song.requester?.id === 1;

  const imageUrl = getImageUrl(song.icon);

  return (
    <StyledSongItemWrapper>
      <StyledImageWrapper>
        <Image url={imageUrl} alt={song.icon.name} size={64} />
      </StyledImageWrapper>
      <StyledInformationWrapper>
        <StyledDesc>
          <StyledSongName>{song.title}</StyledSongName>
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