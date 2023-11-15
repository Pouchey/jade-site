import React from 'react';

import { StyledArtist } from './style';

interface Props {
  artist: string;
}

const Artist = React.memo(({ artist }: Props) => {
  return <StyledArtist>{artist}</StyledArtist>;
});

export default Artist;
