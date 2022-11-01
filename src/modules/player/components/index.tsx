import Counter from '_components/counter';
import Image from '_components/image';
import Label from '_components/label';

import {
  StyledPlayer,
  StyledSongName,
  StyledArtist,
  StyledImageWrapper,
  StyledDesc,
  StyledPlayerSection,
  StyledPlayerInfos,
  StyledCounterWrapper,
} from './style';

const foo = {
  songName: 'Song Name',
  artist: 'Artist',
  icon: {
    url: 'https://picsum.photos/200',
    alt: 'Play',
  },
  count: 1,
  requester: {
    id: 1,
    name: 'Requester Name',
  },
};

export default () => {
  return (
    <StyledPlayer>
      <StyledPlayerSection>
        <StyledImageWrapper>
          <Image size={100} url={foo.icon.url} alt={foo.icon.alt} />
        </StyledImageWrapper>
        <StyledDesc>
          <StyledSongName>{foo.songName}</StyledSongName>
          <StyledArtist>{foo.artist}</StyledArtist>
        </StyledDesc>
      </StyledPlayerSection>
      <StyledPlayerSection>
        <StyledPlayerInfos>
          <StyledCounterWrapper>
            <Counter readonly count={foo.count} />
          </StyledCounterWrapper>
          <Label content={`Requested by ${foo.requester.name}`} />
        </StyledPlayerInfos>
      </StyledPlayerSection>
    </StyledPlayer>
  );
};
