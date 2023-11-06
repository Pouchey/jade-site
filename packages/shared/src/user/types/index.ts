export interface IUser {
  id: number;
  email: string;
  hashedPassword: string;
  role: string;
  refreshToken?: string;
}
