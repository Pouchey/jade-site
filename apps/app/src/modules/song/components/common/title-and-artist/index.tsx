import React from 'react';

import { StyledArtist, StyledSongName } from './style';

interface Props {
  title: string;
  artist: string;
  isOverflow?: boolean;
}

const TitleAndArtist = React.forwardRef<HTMLDivElement, Props>(
  ({ title, artist, isOverflow = false }, ref) => {
    return (
      <StyledSongName $isOverflow={isOverflow}>
        <span ref={ref}>
          {title} - <StyledArtist>{artist}</StyledArtist>
        </span>
        <span>
          {title} - <StyledArtist>{artist}</StyledArtist>
        </span>
      </StyledSongName>
    );
  },
);

export default TitleAndArtist;
