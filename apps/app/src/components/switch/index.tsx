import React from 'react';

import { StyledSwitch } from './style';

interface Props {
  name: string;
  value?: boolean;
  onChange: (val: boolean) => void;
}

const Switch = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { name, value, onChange } = props;

  const onClick = () => onChange(!value);

  return (
    <StyledSwitch onClick={onClick} checked={!!value}>
      <input ref={ref} type="checkbox" id={name} name={name} />
    </StyledSwitch>
  );
});

export default Switch;
