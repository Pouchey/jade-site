import React from 'react';

import FileImage from '_modules/file/components/image';

import { TFile } from '_shared/file/types';

const NotFound = React.memo(() => {
  const [image, setImage] = React.useState<TFile | null>(null);

  const handleUpload = (file: TFile | null) => {
    setImage(file);
  };
  return (
    <div>
      <FileImage image={image} onChange={handleUpload} />
    </div>
  );
});

export default NotFound;
