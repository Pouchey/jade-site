import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

import { TPlayer } from '@jaderowley/shared/src/player/types'
import { initPlayer } from './player.entity';
import { TSong } from '@jaderowley/shared/src/song/types';


@Injectable()
export class PlayerService {

  private readonly connectedUser: Map<string, Socket> = new Map<string, Socket>();

  private readonly player: TPlayer = initPlayer();

  handleConnection(client: Socket) {
    this.connectedUser.set(client.id, client);
  };

  handleDisconnect(client: Socket) {
    this.connectedUser.delete(client.id);
  };

  setNextSong(clientId: string, songId: number) {
    this.player.current = this.player.songs.find(song => song.id === songId) || null;
    this.player.songs = this.player.songs.filter(song => song.id !== songId);
    return this.player;
  }

  likeSong(clientId: string, songId: number) {
    if(this.player.current.id === songId|| this.player.songs.find(song => song.id !== songId) )
      return;
    
    const song = this.player.songs.find(song => song.id === songId);

    if(!song)
      return;

    song.count = song.count + 1;

    return {
      songId: song.id,
      count: song.count
    }
  }

  addSong(clientId: string, songId: number) {
    if(this.player.current.id === songId || this.player.songs.find(song => song.id === songId) )
      return;
    
    // TODO: implement bd
    // const song = bd.getSong(songId);
    // TODO : set song requester
    const song = null as TSong;
    
    if(!song)
      return;

    this.player.songs.push(song);

    return this.player;
  }

}
