import { ITokens } from '@jaderowley/shared/src/auth/types';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/user/user.service';

import { AuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  private async generateTokens(userId: number, email: string) {
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

  private async saveRefreshToken(userId: number, refreshToken: string) {
    const hashedRefreshToken = await bcrypt.hash(refreshToken, 10);

    const user = await this.userService.findUserById(userId);

    if (!user) {
      throw new Error('User not found');
    }

    await this.userService.updateUser(userId, {
      refreshToken: hashedRefreshToken,
    });
  }

  async login(dto: AuthDto): Promise<ITokens> {
    const { email, password } = dto;

    const user = await this.userService.findUserByEmail(email);

    if (!user) {
      throw new ForbiddenException('Access denied');
    }

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordValid) {
      throw new ForbiddenException('Access denied');
    }

    const tokens = await this.generateTokens(user.id, user.email);
    await this.saveRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  async logout(userId: number) {
    await this.userService.updateUser(userId, {
      refreshToken: null,
    });

    return true;
  }

  async refresh(userId: number, refreshToken: string) {
    const user = await this.userService.findUserById(userId);

    if (!user || !user.refreshToken) {
      throw new Error('Access denied');
    }

    const isRefreshTokenValid = await bcrypt.compare(
      refreshToken,
      user.refreshToken,
    );

    if (!isRefreshTokenValid) {
      throw new Error('Access denied');
    }

    const tokens = await this.generateTokens(user.id, user.email);

    await this.saveRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }
}
