import { ChangeEvent } from 'react';
import React from 'react';

import Icon from '_components/icon';

import { StyledInputFile } from './style';

interface Props {
  children: React.ReactNode;
  onChange: (file: File | null) => void;
}

const InputFile = React.forwardRef<HTMLInputElement, Props>(
  ({ children, onChange }, ref) => {
    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        onChange(file);
      }
    };

    return (
      <StyledInputFile>
        <span>{children}</span>
        <input type="file" ref={ref} onChange={handleFileChange} />
        <Icon glyph="image" size={60} color="grey75" />
      </StyledInputFile>
    );
  },
);

export default InputFile;
