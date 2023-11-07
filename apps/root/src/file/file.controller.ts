import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { FileParser } from './file.parser';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(FileParser)
    file: Express.Multer.File,
  ) {
    return this.fileService.uploadFile(file);
  }

  @Delete(':id')
  deleteFile(@Param('id') id: number) {
    return this.fileService.deleteFile(id);
  }

  @Get(':id')
  getFile(@Param('id') id: number) {
    return this.fileService.getFile(id);
  }
}
