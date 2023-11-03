import { ITokens } from '@jaderowley/shared/src/auth/types';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  hashData(data: string) {
    return bcrypt.hash(data, 10);
  }

  async generateTokens(userId: string, email: string) {
    const accessTokenPromise = this.jwtService.signAsync(
      {
        sub: userId,
        email,
      },
      {
        secret: process.env.ACCESS_TOKEN_SECRET,
        expiresIn: '15m',
      },
    );

    const refreshTokenPromise = this.jwtService.signAsync(
      {
        sub: userId,
        email,
      },
      {
        secret: process.env.REFRESH_TOKEN_SECRET,
        expiresIn: '7d',
      },
    );

    const [accessToken, refreshToken] = await Promise.all([
      accessTokenPromise,
      refreshTokenPromise,
    ]);

    return { accessToken, refreshToken };
  }

  async login(dto: AuthDto): Promise<ITokens> {
    const { email, password } = dto;

    const hashedPassword = await this.hashData(process.env.ADMIN_PASSWORD);
    const isPasswordValid = await bcrypt.compare(password, hashedPassword);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const tokens = await this.generateTokens(process.env.ADMIN_ID, email);

    return tokens;
  }

  async logout() {}

  async refresh() {}
}
