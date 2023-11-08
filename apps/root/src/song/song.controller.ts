import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { AtGuard } from 'src/core/guards';
import { FileParser } from 'src/file/file.parser';
import { FileService } from 'src/file/file.service';
import { storage } from 'src/utils/file';

import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { SongService } from './song.service';

@Controller('songs')
export class SongController {
  constructor(
    private readonly songService: SongService,
    private readonly fileService: FileService,
  ) {}

  @UseGuards(AtGuard)
  @Post()
  @UseInterceptors(FileInterceptor('file', { storage: storage }))
  async create(
    @UploadedFile(FileParser)
    file: Express.Multer.File,
    @Body()
    createSongDto: CreateSongDto,
  ) {
    if (!file) {
      return this.songService.create(createSongDto);
    }
    const icon = await this.fileService.uploadFile(file);
    return this.songService.create(createSongDto, icon.id);
  }

  @Get()
  findAll() {
    return this.songService.findAll();
  }

  @UseGuards(AtGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.songService.findOne(+id);
  }

  @UseGuards(AtGuard)
  @Put(':id')
  @UseInterceptors(FileInterceptor('file', { storage: storage }))
  async update(
    @Param('id') id: string,
    @UploadedFile(FileParser)
    file: Express.Multer.File,
    @Body() updateSongDto: UpdateSongDto,
  ) {
    if (!file) {
      return this.songService.update(+id, updateSongDto);
    }
    const icon = await this.fileService.uploadFile(file);
    return this.songService.update(+id, updateSongDto, icon.id);
  }

  @UseGuards(AtGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.songService.remove(+id);
  }
}
