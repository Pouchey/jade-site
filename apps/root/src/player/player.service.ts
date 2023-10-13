import { Injectable } from '@nestjs/common';
import { Socket } from 'socket.io';

import { TSong } from '@jaderowley/shared/src/song/types'

@Injectable()
export class PlayerService {

  private readonly connectedUser: Map<string, Socket> = new Map<string, Socket>();

  private readonly songList: Map<string, TSong[]> = new Map<string, TSong[]>();

  handleConnection(client: Socket) {
    this.connectedUser.set(client.id, client);
  };

  handleDisconnect(client: Socket) {
    this.connectedUser.delete(client.id);
  };


}
