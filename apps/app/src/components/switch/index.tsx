import { useState } from 'react';

import Label from '_components/label';

import {
  StyledSwitchContainer,
  StyledSwitch,
  StyledCheckbox,
  StyledSlider,
} from './style';

interface Props {
  label?: string;
  value?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ label, value = false, onChange }: Props) => {
  const [checked, setChecked] = useState(value);

  return (
    <StyledSwitchContainer>
      {label && <Label content={label} />}
      <StyledSwitch>
        <StyledCheckbox type="checkbox" checked={value} onChange={onChange} />
        <StyledSlider
          $checked={checked}
          onClick={() => setChecked(!checked)}
        ></StyledSlider>
      </StyledSwitch>
    </StyledSwitchContainer>
  );
};

export default Switch;
