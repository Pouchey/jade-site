import Counter from '_components/counter';
import Image from '_components/image';
import Label from '_components/label';

import { useFetchPlayer } from '../hooks/useServices';

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

export default () => {
  const { data: player } = useFetchPlayer();

  if (!player) return null;

  return (
    <StyledPlayer>
      <StyledPlayerSection>
        <StyledImageWrapper>
          <Image size={100} url={player.icon.url} alt={player.icon.alt} />
        </StyledImageWrapper>
        <StyledDesc>
          <StyledSongName>{player.songName}</StyledSongName>
          <StyledArtist>{player.artist}</StyledArtist>
        </StyledDesc>
      </StyledPlayerSection>
      <StyledPlayerSection>
        <StyledPlayerInfos>
          <StyledCounterWrapper>
            <Counter readonly count={player.count} />
          </StyledCounterWrapper>
          <Label content={`Requested by ${player.requester.name}`} />
        </StyledPlayerInfos>
      </StyledPlayerSection>
    </StyledPlayer>
  );
};
