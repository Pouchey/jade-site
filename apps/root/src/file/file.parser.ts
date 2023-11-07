import { ParseFilePipeBuilder, HttpStatus } from '@nestjs/common';

export const FileParser = new ParseFilePipeBuilder()
  .addMaxSizeValidator({
    maxSize: 1024 * 1024 * 2,
  })
  .addFileTypeValidator({
    fileType: new RegExp('image/*'),
  })
  .build({
    errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
  });
