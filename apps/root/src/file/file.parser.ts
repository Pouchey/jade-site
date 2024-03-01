import { ParseFilePipeBuilder, HttpStatus } from '@nestjs/common';

export const FileParser = new ParseFilePipeBuilder()
  .addMaxSizeValidator({
    maxSize: 1024 * 1024 * 5,
  })
  .addFileTypeValidator({
    fileType: new RegExp('image/*'),
  })
  .build({
    fileIsRequired: false,
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  });
