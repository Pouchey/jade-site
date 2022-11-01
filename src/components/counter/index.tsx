import Icon from '_components/icon';

import {
  StyledCounter,
  StyledCounterText,
  StyledLike,
  StyledReadOnyCounter,
} from './style';
import { CounterProps } from './types';

export default ({
  count = 0,
  requested = false,
  readonly = false,
  disabled = false,
  onClick,
}: CounterProps) => {
  if (readonly)
    return (
      <StyledReadOnyCounter requested={requested}>
        <StyledLike>
          <Icon glyph="heart" size={24} color={requested ? 'red1' : 'black'} />
        </StyledLike>
        <StyledCounterText>{count}</StyledCounterText>
      </StyledReadOnyCounter>
    );

  return (
    <StyledCounter onClick={onClick} disabled={disabled} requested={requested}>
      <StyledCounterText>{count}</StyledCounterText>
      <StyledLike>
        <Icon glyph="heart" size={24} color={requested ? 'red1' : 'black'} />
      </StyledLike>
    </StyledCounter>
  );
};
