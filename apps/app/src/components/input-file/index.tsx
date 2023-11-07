import { ChangeEvent, useRef } from 'react';

import Icon from '_components/icon';

const InputFile = () => {
  const fileInput = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log(file.name);
    }
  };

  return (
    <div>
      <input type="file" ref={fileInput} onChange={handleFileChange} />
      <Icon glyph="image" size={60} color="grey75" />
    </div>
  );
};

export default InputFile;
