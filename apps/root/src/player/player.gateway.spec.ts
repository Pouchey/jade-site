import { Test, TestingModule } from '@nestjs/testing';

import { PlayerGateway } from './Player.gateway';

describe('PlayerGateway', () => {
  let gateway: PlayerGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlayerGateway],
    }).compile();

    gateway = module.get<PlayerGateway>(PlayerGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });

  describe('fn', () => {
    it('should return x', () => {
      // TODO
    });
  });
});
