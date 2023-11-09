import Icon from '_components/icon';

import { StyledSongItemList } from '../style';

import { StyledLogoWrapper } from './style';

const Fake = () => {
  return (
    <StyledSongItemList>
      <StyledLogoWrapper>
        <Icon glyph="guitare" size={300} color="black" />
      </StyledLogoWrapper>
    </StyledSongItemList>
  );
};

export default Fake;
