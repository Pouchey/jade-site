import Button from '_components/button';

import Player from '_modules/player/components';

import { StyledContainer, StyledWrapper } from './style';

export default () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <Player />
        <Button
          label="ADD A SONG"
          color="primary"
          size="diplodocus"
          onClick={() => console.log('add a song')}
        />
      </StyledWrapper>
    </StyledContainer>
  );
};
