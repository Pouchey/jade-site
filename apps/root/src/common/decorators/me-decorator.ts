import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';
import { TJWTPayload } from 'src/auth/types/jwt';

export const GetMe = createParamDecorator(
  (data: keyof TJWTPayload | undefined, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest<Request>();
    const user = request.user as TJWTPayload;

    if (!data) return user;

    return user[data];
  },
);
