import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AuthModule } from 'src/auth/auth.module';
import { FileModule } from 'src/file/file.module';
import { PrismaModule } from 'src/prisma/prisma.module';
import { SongModule } from 'src/song/song.module';
import { UserModule } from 'src/user/user.module';

import { PlayerModule } from '../player/player.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MulterModule.register({
      dest: './images',
    }),
    ServeStaticModule.forRoot({
      rootPath: './images',
      serveRoot: '/images',
    }),
    AuthModule,
    FileModule,
    PlayerModule,
    PrismaModule,
    SongModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
