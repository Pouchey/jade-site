import React from 'react';

import { StyledArtist, StyledSongName } from './style';

interface Props {
  title: string;
  artist: string;
}

const TitleAndArtist = React.memo(({ title, artist }: Props) => {
  return (
    <StyledSongName>
      <span>
        {title} - <StyledArtist>{artist}</StyledArtist>
      </span>
      <span>
        {title} - <StyledArtist>{artist}</StyledArtist>
      </span>
    </StyledSongName>
  );
});

export default TitleAndArtist;
