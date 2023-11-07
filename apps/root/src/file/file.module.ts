import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PrismaService } from 'src/prisma/prisma.service';
import { storage } from 'src/utils/file';

import { FileController } from './file.controller';
import { FileService } from './file.service';

@Module({
  imports: [
    MulterModule.register({
      storage,
      dest: './images',
    }),
    ServeStaticModule.forRoot({
      rootPath: './images',
      serveRoot: '/images',
    }),
  ],
  controllers: [FileController],
  providers: [FileService, PrismaService],
})
export class FileModule {}
