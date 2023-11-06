export type TJWTPayload = {
  sub: number;
  email: string;
  refreshToken?: string;
};
