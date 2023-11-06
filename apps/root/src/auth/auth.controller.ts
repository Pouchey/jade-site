import { ITokens } from '@jaderowley/shared/src/auth/types';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetMe } from 'src/common/decorators';
import { AtGuard, RtGuard } from 'src/common/guards';

import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AtGuard)
  @Get('me')
  @HttpCode(HttpStatus.OK)
  me(@GetMe('sub') userId: number) {
    return this.authService.me(userId);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  login(@Body() dto: AuthDto): Promise<ITokens> {
    return this.authService.login(dto);
  }

  @UseGuards(AtGuard)
  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetMe('sub') userId: number) {
    return this.authService.logout(userId);
  }

  @UseGuards(RtGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refresh(
    @GetMe('sub') userId: number,
    @GetMe('refreshToken') refreshToken: string,
  ) {
    return this.authService.refresh(userId, refreshToken);
  }
}
