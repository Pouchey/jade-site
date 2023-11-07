import React from 'react';

import Button from '_components/button';
import Icon from '_components/icon';

import { StyledDarkTitle } from '_style/common';

import { StyledLogoWrapper } from './style';

interface Props {
  handleClick: () => void;
}

const AddSong = React.memo(({ handleClick }: Props) => {
  return (
    <div>
      <Button
        label="ADD A SONG"
        size="grizzly"
        color="primary"
        onClick={handleClick}
      />
      <StyledLogoWrapper>
        <Icon glyph="guitare" size={400} color="white" />
        <StyledDarkTitle>Jade Rowley</StyledDarkTitle>
      </StyledLogoWrapper>
    </div>
  );
});

export default AddSong;
