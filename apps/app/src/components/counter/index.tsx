import Icon from '_components/icon';

import {
  StyledCounter,
  StyledCounterText,
  StyledLike,
  StyledReadOnyCounter,
} from './style';

interface Props {
  count?: number;
  size?: number;
  isLiked?: boolean;
  readonly?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Counter = ({
  count = 0,
  size = 24,
  isLiked = false,
  readonly = false,
  disabled = false,
  onClick,
}: Props) => {
  if (readonly)
    return (
      <StyledReadOnyCounter $liked={isLiked}>
        <StyledLike>
          <Icon glyph="heart" size={size} color={isLiked ? 'red1' : 'black'} />
        </StyledLike>
        <StyledCounterText>{count}</StyledCounterText>
      </StyledReadOnyCounter>
    );

  return (
    <StyledCounter onClick={onClick} $disabled={disabled} $liked={isLiked}>
      <StyledCounterText>{count}</StyledCounterText>
      <StyledLike>
        <Icon glyph="heart" size={size} color={isLiked ? 'red1' : 'black'} />
      </StyledLike>
    </StyledCounter>
  );
};

export default Counter;
