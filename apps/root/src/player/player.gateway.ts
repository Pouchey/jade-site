import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { SongService } from 'src/song/song.service';

import { PlayerService } from './player.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class PlayerGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly playerService: PlayerService,
    private readonly songService: SongService,
  ) {}

  handleConnection(client: Socket) {
    const token = client.handshake.auth.token as string;
    this.playerService.handleConnection(client, token);
  }

  handleDisconnect() {
    this.playerService.handleDisconnect();
  }

  @SubscribeMessage('fetchPlayer')
  handleFetchPlayer() {
    const player = this.playerService.fetchPlayer();

    this.server.emit('playerUpdated', player);
  }

  @SubscribeMessage('resetPlayed')
  handleRestPlayed() {
    const played = this.playerService.fetchPlayed();
    const updatedSongs = this.songService.resetPlayed(played);

    this.server.emit('playerReset', updatedSongs);
  }

  @SubscribeMessage('setPseudo')
  handleSetPseudo(
    @ConnectedSocket() client: Socket,
    @MessageBody() pseudo: string,
  ) {
    this.playerService.setPseudo(client.id, pseudo);
  }

  @SubscribeMessage('addSong')
  async handleAddSong(
    @ConnectedSocket() client: Socket,
    @MessageBody() songId: number,
  ) {
    const song = await this.songService.findOne(songId);

    const addedSong = await this.playerService.addSong(client.id, songId, song);
    await this.songService.updateLikes(addedSong.id, 1);

    this.server.emit('songAdded', addedSong);
  }

  @SubscribeMessage('nextSong')
  async handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() songId: number,
  ) {
    const player = this.playerService.setNextSong(client.id, songId);
    if (songId !== -1) await this.songService.updatePlays(songId, 1);

    this.server.emit('playerUpdated', player);
  }

  @SubscribeMessage('likeSong')
  async handleLikeSong(
    @ConnectedSocket() client: Socket,
    @MessageBody() songId: number,
  ) {
    const liked = this.playerService.likeSong(client.id, songId);
    if (!liked) return;
    await this.songService.updateLikes(liked.songId, 1);

    this.server.emit('songUpdated', liked);
  }

  @SubscribeMessage('dislikeSong')
  async handleDislikeSong(
    @ConnectedSocket() client: Socket,
    @MessageBody() songId: number,
  ) {
    const res = this.playerService.dislikeSong(client.id, songId);
    if (!res) return;

    await this.songService.updateLikes(res.dislike.songId, -1);

    if (res.dislike) this.server.emit('songUpdated', res.dislike);

    if (res.remove.isRemoved)
      this.server.emit('songRemoved', res.remove.songId);
  }
}
