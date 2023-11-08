import Icon from '_components/icon';
import Image from '_components/image';
import InputFile from '_components/input-file';

import { useUploadfile, useDeleteFile } from '_modules/file/hooks/useServices';
import { getImageUrl } from '_modules/file/utils';

import { TFile } from '_shared/file/types';

import {
  StyledDelete,
  StyledImageWrapper,
  StyledInputFileWrapper,
  StyledPlus,
} from './style';

interface Props {
  image: TFile | null;
  onChange: (file: TFile | null) => void;
}

const FileImage = ({ image, onChange }: Props) => {
  const { mutateAsync: uploadFile } = useUploadfile();
  const { mutate: deleteFile } = useDeleteFile();

  const imageUrl = getImageUrl(image);

  const handleDelete = () => {
    if (image) {
      deleteFile(image.id);
      onChange(null);
    }
  };

  const handleUpload = async (file: File | null) => {
    handleDelete();
    if (file) {
      const newImage = await uploadFile(file);
      onChange(newImage);
    }
  };

  return (
    <StyledInputFileWrapper>
      <InputFile name="image" onChange={handleUpload}>
        <StyledImageWrapper>
          {image && (
            <>
              <Image url={imageUrl} alt={image.name} />
              <StyledDelete onClick={handleDelete}>
                <Icon glyph="close" color="white" />
              </StyledDelete>
              <StyledPlus>
                <Icon glyph="plus" size={64} color="white" />
              </StyledPlus>
            </>
          )}
        </StyledImageWrapper>
      </InputFile>
    </StyledInputFileWrapper>
  );
};

export default FileImage;
