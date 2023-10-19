import React from 'react';

import { useMenuContext } from '_modules/ui/hooks/useContext';

import { StyledLink } from './style';

interface Props {
  label: string;
  to: string;
}

const Link = React.memo(({ label, to }: Props) => {
  const { dispatch } = useMenuContext();

  const handleClick = () => {
    dispatch({ type: 'closeMenu' });
  };

  return (
    <StyledLink to={to} onClick={handleClick}>
      {label}
    </StyledLink>
  );
});

export default Link;
