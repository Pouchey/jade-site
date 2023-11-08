import Icon from '_components/icon';
import Image from '_components/image';
import InputFile from '_components/input-file';

import { useUploadfile, useDeleteFile } from '_modules/file/hooks/useServices';
import { getImageUrl } from '_modules/file/utils';

import { TFile } from '_shared/file/types';

import { StyledImageWrapper } from './style';

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
    <InputFile name="image" onChange={handleUpload}>
      <StyledImageWrapper>
        {image && <Image url={imageUrl} alt={image.name} />}
        <Icon glyph="plus" />
        <button onClick={handleDelete}>Delete</button>
      </StyledImageWrapper>
    </InputFile>
  );
};

export default FileImage;
