import socket from '_services/socket';

import { TSong } from '_shared/song/types';

const onPlayerUpdate = (callback: (data: TSong) => void) => {
  socket.on('player', callback);
};

export default onPlayerUpdate;
