import React from 'react';

import { StyledInput } from './style';

interface Props {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}
const Input = ({ placeholder = '', value, onChange }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };
  return (
    <StyledInput
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
