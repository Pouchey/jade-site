import { useState } from 'react';

import { StyledBurger, StyledLines } from './style';
import { BurgerProps } from './types';

const Burger = ({ onClick, size = 32 }: BurgerProps) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    onClick();
  };

  return (
    <StyledBurger
      onClick={handleClick}
      size={size}
      className={open ? 'opened' : 'closed'}
    >
      <StyledLines />
    </StyledBurger>
  );
};

export default Burger;
