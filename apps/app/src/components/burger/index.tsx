import { useState } from 'react';

import { StyledBurger, StyledLines } from './style';

interface Props {
  onClick: () => void;
  size?: number;
}

const Burger = ({ onClick, size = 32 }: Props) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
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
