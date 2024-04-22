import { ForbiddenException, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Request } from 'express';
import { ExtractJwt } from 'passport-jwt';
import { Strategy } from 'passport-local';

import { TJWTPayload } from '../types/jwt';

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.REFRESH_TOKEN_SECRET,
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload: TJWTPayload) {
    const refreshToken = req.get('authorization').replace('Bearer ', '').trim();

    if (!refreshToken) {
      throw new ForbiddenException('No refresh token provided');
    }
    return {
      ...payload,
      refreshToken,
    };
  }
}
