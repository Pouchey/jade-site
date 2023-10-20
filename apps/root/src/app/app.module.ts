import { Module } from '@nestjs/common';

import { PlayerModule } from '../player/player.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [PlayerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
