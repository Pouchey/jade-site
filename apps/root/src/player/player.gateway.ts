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

import { PlayerService } from './player.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class PlayerGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly playerService: PlayerService) {}

  handleConnection(client: Socket) {
    const token = client.handshake.auth.token as string;
    this.playerService.handleConnection(client, token);
  }

  handleDisconnect(client: Socket) {
    this.playerService.handleDisconnect(client);
  }

  @SubscribeMessage('fetchPlayer')
  handleFetchPlayer() {
    const player = this.playerService.fetchPlayer();

    this.server.emit('playerUpdated', player);
  }

  @SubscribeMessage('addSong')
  async handleAddSong(
    @ConnectedSocket() client: Socket,
    @MessageBody() songId: number,
  ) {
    const song = await this.playerService.addSong(client.id, songId);

    this.server.emit('songAdded', song);
  }

  @SubscribeMessage('nextSong')
  handleMessage(
    @ConnectedSocket() client: Socket,
    @MessageBody() songId: number,
  ) {
    const player = this.playerService.setNextSong(client.id, songId);

    this.server.emit('playerUpdated', player);
  }

  @SubscribeMessage('likeSong')
  handleLikeSong(
    @ConnectedSocket() client: Socket,
    @MessageBody() songId: number,
  ) {
    const liked = this.playerService.likeSong(client.id, songId);
    if (!liked) return;

    this.server.emit('songUpdated', liked);
  }

  @SubscribeMessage('dislikeSong')
  handleDislikeSong(
    @ConnectedSocket() client: Socket,
    @MessageBody() songId: number,
  ) {
    const res = this.playerService.dislikeSong(client.id, songId);
    if (!res) return;

    if (res.dislike) this.server.emit('songUpdated', res.dislike);

    if (res.remove.isRemoved)
      this.server.emit('songRemoved', res.remove.songId);
  }
}
