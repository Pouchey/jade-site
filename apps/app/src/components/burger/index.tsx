import { StyledBurger, StyledLines } from './style';

interface Props {
  value: boolean;
  size?: number;
  onClick: () => void;
}

const Burger = ({ value, size = 32, onClick }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <StyledBurger
      onClick={handleClick}
      size={size}
      className={value ? 'opened' : 'closed'}
    >
      <StyledLines />
    </StyledBurger>
  );
};

export default Burger;
