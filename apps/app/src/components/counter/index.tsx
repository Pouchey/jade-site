import Icon from '_components/icon';

import {
  StyledCounter,
  StyledCounterText,
  StyledLike,
  StyledReadOnyCounter,
} from './style';

interface Props {
  count?: number;
  liked?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Counter = ({
  count = 0,
  liked = false,
  readonly = false,
  disabled = false,
  onClick,
}: Props) => {
  if (readonly)
    return (
      <StyledReadOnyCounter $requested={liked}>
        <StyledLike>
          <Icon glyph="heart" size={24} color={liked ? 'red1' : 'black'} />
        </StyledLike>
        <StyledCounterText>{count}</StyledCounterText>
      </StyledReadOnyCounter>
    );

  return (
    <StyledCounter
      onClick={onClick}
      $disabled={disabled}
      $requested={liked}
    >
      <StyledCounterText>{count}</StyledCounterText>
      <StyledLike>
        <Icon glyph="heart" size={24} color={liked ? 'red1' : 'black'} />
      </StyledLike>
    </StyledCounter>
  );
};

export default Counter;
