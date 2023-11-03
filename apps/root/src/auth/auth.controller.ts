import { ITokens } from '@jaderowley/shared/src/auth/types';
import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/login')
  login(@Body() dto: AuthDto): Promise<ITokens> {
    return this.authService.login(dto);
  }

  @Post('auth/logout')
  logout() {
    return this.authService.logout();
  }

  @Post('auth/refresh')
  refresh() {
    return this.authService.refresh();
  }
}
