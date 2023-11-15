import React from 'react';

import { StyledSongName } from './style';

interface Props {
  title: string;
}

const Title = React.memo(({ title }: Props) => {
  return <StyledSongName>{title}</StyledSongName>;
});

export default Title;
