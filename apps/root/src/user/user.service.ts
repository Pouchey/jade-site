import { IUser } from '@jaderowley/shared/src/user/types';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findUserById(id: number) {
    const user = await this.prismaService.user.findUnique({
      where: { id },
    });

    return user;
  }

  async findUserByEmail(email: string) {
    const user = await this.prismaService.user.findUnique({
      where: { email },
    });

    return user;
  }

  async createUser(email: string, password: string, role: string = 'user') {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.prismaService.user.create({
      data: {
        email,
        hashedPassword,
        role,
      },
    });

    return user;
  }

  async updateUser(id: number, data: Partial<IUser>) {
    const user = await this.prismaService.user.update({
      where: { id },
      data,
    });

    return user;
  }
}
