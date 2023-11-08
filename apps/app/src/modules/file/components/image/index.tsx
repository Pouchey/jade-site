import { useState } from 'react';

import Icon from '_components/icon';
import InputFile from '_components/input-file';

import {
  StyledImageWrapper,
  StyledInputFileWrapper,
  StyledPlus,
} from './style';

interface Props {
  onChange: (file: File | null) => void;
}

const FileImage = ({ onChange }: Props) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleUpload = (file: File | null) => {
    if (!file || !file.type.includes('image')) return;
    const url = URL.createObjectURL(file);
    setImageUrl(url);
    onChange(file);
  };

  return (
    <StyledInputFileWrapper>
      <InputFile onChange={handleUpload}>
        {imageUrl && (
          <StyledImageWrapper>
            <>
              <img src={imageUrl} />
              <StyledPlus>
                <Icon glyph="plus" size={64} color="white" />
              </StyledPlus>
            </>
          </StyledImageWrapper>
        )}
      </InputFile>
    </StyledInputFileWrapper>
  );
};

export default FileImage;
