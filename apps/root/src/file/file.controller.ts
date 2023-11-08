import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AtGuard } from 'src/core/guards';
import { storage } from 'src/utils/file';

import { FileParser } from './file.parser';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @UseGuards(AtGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file', { storage: storage }))
  uploadFile(
    @UploadedFile(FileParser)
    file: Express.Multer.File,
  ) {
    return this.fileService.uploadFile(file);
  }

  @UseGuards(AtGuard)
  @Delete(':id')
  deleteFile(@Param('id') id: string) {
    return this.fileService.deleteFile(+id);
  }

  @Get(':id')
  getFile(@Param('id') id: string) {
    return this.fileService.getFile(+id);
  }
}
