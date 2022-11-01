import { StyledBurger, StyledLines } from './style';
import { BurgerProps } from './types';

export default ({ onClick, size = 32 }: BurgerProps) => {
  return (
    <StyledBurger onClick={onClick} size={size}>
      <StyledLines />
    </StyledBurger>
  );
};
