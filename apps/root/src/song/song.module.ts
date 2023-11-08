import { Module } from '@nestjs/common';
import { FileService } from 'src/file/file.service';

import { SongController } from './song.controller';
import { SongService } from './song.service';

@Module({
  controllers: [SongController],
  providers: [SongService, FileService],
})
export class SongModule {}
