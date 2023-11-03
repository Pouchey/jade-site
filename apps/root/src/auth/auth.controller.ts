import { ITokens } from '@jaderowley/shared/src/auth/types';
import { Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/login')
  async login(): Promise<ITokens> {
    return await this.authService.login();
  }

  @Post('auth/logout')
  async logout() {
    return await this.authService.logout();
  }

  @Post('auth/refresh')
  async refresh() {
    return await this.authService.refresh();
  }
}
