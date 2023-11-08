import { useState } from "react";
import { StyledSwitchContainer, StyledSwitch, StyledCheckbox, StyledSlider } from "./style";
import Label from "_components/label";

interface Props{
    label?: string;
    value?: boolean;
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
}

const Switch = ({ label, value = false, onChange }: Props) => {

    const [checked, setChecked] = useState(value);

  return (
    <StyledSwitchContainer>
      {label && <Label content={label}/>}
      <StyledSwitch>
        <StyledCheckbox type="checkbox" checked={value} onChange={onChange}/>
        <StyledSlider $checked={checked} onClick={() => setChecked(!checked)}></StyledSlider>
      </StyledSwitch>
    </StyledSwitchContainer>
  );
};

export default Switch;
