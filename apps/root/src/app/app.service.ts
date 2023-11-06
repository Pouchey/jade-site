import { Injectable, OnModuleInit } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(private readonly userService: UserService) {}

  async onModuleInit() {
    const admin = await this.userService.findUserByEmail(
      process.env.ADMIN_EMAIL,
    );

    if (!admin) {
      await this.userService.createUser(
        process.env.ADMIN_EMAIL,
        process.env.ADMIN_PASSWORD,
        'admin',
      );
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
