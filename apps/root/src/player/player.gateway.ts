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

  @SubscribeMessage('player')
  handleMessage(@ConnectedSocket() client: Socket,
    @MessageBody() message: string) {
    this.server.emit('player', message); // Broadcast the message to all connected clients
    }

}