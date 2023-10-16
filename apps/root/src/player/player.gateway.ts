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

  constructor(private readonly playerService: PlayerService) { }


  handleConnection(client: Socket) {
    this.playerService.handleConnection(client);
  }

  handleDisconnect(client: Socket) {
    this.playerService.handleDisconnect(client);
  }

  @SubscribeMessage('nextSong')
  handleMessage(@ConnectedSocket() client: Socket,
    @MessageBody() songId: number) {

    const player = this.playerService.setNextSong(client.id, songId);

    this.server.emit('playerUpdated',player); 
  }

  @SubscribeMessage('likeSong')
  handleLikeSong(@ConnectedSocket() client: Socket,
    @MessageBody() songId: number) {

    const liked = this.playerService.likeSong(client.id, songId);

    if(!liked)
      return;

    this.server.emit('songUpdated',liked); 
  }

  @SubscribeMessage('addSong')
  handleAddSong(@ConnectedSocket() client: Socket,
    @MessageBody() songId: number) {

    const song = this.playerService.addSong(client.id, songId);

    this.server.emit('songAdded',song); 
  }

}