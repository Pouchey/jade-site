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

  async login(dto: AuthDto): Promise<ITokens> {
    const { email, password } = dto;

    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    const isPasswordValid = await bcrypt.compare(password, user.hashedPassword);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    // TODO: Generate tokens

    // TODO: Save refresh token to database
    // TODO: Return tokens

    return {} as ITokens;
  }

  async logout() {}

  async refresh() {}
}
