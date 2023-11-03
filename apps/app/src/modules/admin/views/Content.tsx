import React from 'react';

import AddSong from './add-song';
import Form from './form';
import SelectSong from './select-song';
import { StyledContainer } from './style';

const Content = React.memo(() => {
  return (
    <StyledContainer>
      <AddSong />
      <SelectSong />
      <Form />
    </StyledContainer>
  );
});

export default Content;
