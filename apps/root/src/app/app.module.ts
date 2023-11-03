import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { PlayerModule } from '../player/player.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PlayerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
