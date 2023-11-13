export type TAccessToken = string;
export type TRefreshToken = string;
export type TSocketToken = string;

export const ACCESS_TOKEN_KEY = 'access-token';
export const REFRESH_TOKEN_KEY = 'refresh-token';
export const SOCKET_TOKEN_KEY = 'socket-token';

export interface ITokens {
  accessToken: TAccessToken;
  refreshToken: TRefreshToken;
}
