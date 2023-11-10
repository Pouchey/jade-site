import { Module } from '@nestjs/common';
import { SongModule } from 'src/song/song.module';

import { PlayerGateway } from './player.gateway';
import { PlayerService } from './player.service';

@Module({
  imports: [SongModule],
  providers: [PlayerGateway, PlayerService],
})
export class PlayerModule {}
