import { TListener } from '@jaderowley/shared/src/listener/types';
import { TPlayer } from '@jaderowley/shared/src/player/types';
import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';
import { SongService } from 'src/song/song.service';

import { createListener, initPlayer } from './player.entity';

@Injectable()
export class PlayerService {
  constructor(private readonly songService: SongService) {}

  // mapped by socketId
  private readonly connectedUser: Map<string, TListener> = new Map<
    string,
    TListener
  >();

  private readonly player: TPlayer = initPlayer();

  getListenerByToken(token: string) {
    return [...this.connectedUser.values()].find(
      (listener) => listener.token === token,
    );
  }

  handleConnection(client: Socket, token: string) {
    const listener = this.getListenerByToken(token);

    if (listener) {
      this.connectedUser.delete(listener.socketId);
      this.connectedUser.set(client.id, {
        ...listener,
        socketId: client.id,
      });
      return;
    }

    const newListener = createListener(client);

    this.connectedUser.set(newListener.socketId, newListener);

    client.emit('tokenUpdated', newListener.token);
  }

  handleDisconnect(client: Socket) {
    const listener = this.connectedUser.get(client.id);

    this.connectedUser.set(listener.socketId, {
      ...listener,
      socketId: null,
    });
  }

  fetchPlayer() {
    return this.player;
  }

  async addSong(clientId: string, songId: number) {
    if (
      this.player.current?.id === songId ||
      this.player.songs.find((song) => song.id === songId)
    )
      return;

    const song = await this.songService.findOne(songId);

    const listener = this.connectedUser.get(clientId);

    song.requester = {
      id: listener.token,
      name: listener.name,
    };

    song.count = 1;
    song.likes = [listener.token];

    this.player.songs.push(song);

    return song;
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
    const listener = this.connectedUser.get(clientId);

    if (!song || song.likes.includes(listener.token)) return;

    song.count = song.count + 1;
    song.likes.push(listener.token);

    return {
      songId: song.id,
      count: song.count,
    };
  }

  dislikeSong(clientId: string, songId: number) {
    if (this.player.current?.id === songId) return;

    const song = this.player.songs.find((song) => song.id === songId);
    const listener = this.connectedUser.get(clientId);

    if (!song || !song.likes.includes(listener.token)) return;

    song.count = song.count - 1;
    song.likes = song.likes.filter((like) => like !== listener.token);

    return {
      songId: song.id,
      count: song.count,
    };
  }
}
