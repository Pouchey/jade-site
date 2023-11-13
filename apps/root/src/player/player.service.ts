import { TPlayer } from '@jaderowley/shared/src/player/types';
import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { SongService } from 'src/song/song.service';

import { initPlayer } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(private readonly songService: SongService) {}

  private readonly connectedUser: Map<string, Socket> = new Map<
    string,
    Socket
  >();

  private readonly player: TPlayer = initPlayer();

  handleConnection(client: Socket) {
    this.connectedUser.set(client.id, client);
  }

  handleDisconnect(client: Socket) {
    this.connectedUser.delete(client.id);
  }

  fetchPlayer() {
    return this.player;
  }

  setNextSong(clientId: string, songId: number) {
    this.player.current =
      this.player.songs.find((song) => song.id === songId) || null;
    this.player.songs = this.player.songs.filter((song) => song.id !== songId);
    return this.player;
  }

  likeSong(clientId: string, songId: number) {
    if (
      this.player.current.id === songId ||
      this.player.songs.find((song) => song.id !== songId)
    )
      return;

    const song = this.player.songs.find((song) => song.id === songId);

    if (!song) return;

    song.count = song.count + 1;

    return {
      songId: song.id,
      count: song.count,
    };
  }

  async addSong(clientId: string, songId: number) {
    if (
      this.player.current?.id === songId ||
      this.player.songs.find((song) => song.id === songId)
    )
      return;

    const song = await this.songService.findOne(songId);

    song.requester = {
      id: clientId,
      name: 'Jade',
    };

    song.count = 1;

    this.player.songs.push(song);

    return song;
  }
}
