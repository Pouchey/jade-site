import { TListener } from '@jaderowley/shared/src/listener/types';
import { TPlayer } from '@jaderowley/shared/src/player/types';
import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { SongService } from 'src/song/song.service';

import { createListener, initPlayer } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(private readonly songService: SongService) {}

  private readonly connectedUser: Map<string, TListener> = new Map<
    string,
    TListener
  >();

  private readonly player: TPlayer = initPlayer();

  getListenerBySocketId(socketId: string) {
    return [...this.connectedUser.values()].find(
      (listener) => listener.socket?.id === socketId,
    );
  }

  handleConnection(client: Socket, token: string) {
    const listener = this.connectedUser.get(token);

    if (!token || !listener) {
      const newListener = createListener(client);
      this.connectedUser.set(newListener.id, newListener);

      client.emit('tokenUpdated', newListener.id);
    }

    if (listener) {
      listener.socket = client;
      return;
    }
  }

  handleDisconnect(client: Socket) {
    const listener = this.getListenerBySocketId(client.id);

    this.connectedUser.set(listener.id, {
      ...listener,
      socket: null,
    });
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
    if (this.player.current?.id === songId) return;

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

    const listener = this.getListenerBySocketId(clientId);
    song.requester = {
      id: listener.id,
      name: listener.name,
    };

    song.count = 1;

    this.player.songs.push(song);

    return song;
  }
}
