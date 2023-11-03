export type TAccessToken = string;
export type TRefreshToken = string;

export const ACCESS_TOKEN_KEY = 'access-token';
export const REFRESH_TOKEN_KEY = 'refresh-token';

export interface ITokens {
  accessToken: TAccessToken;
  refreshToken: TRefreshToken;
}
