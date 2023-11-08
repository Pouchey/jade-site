import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSongDto {
  @IsNotEmpty()
  @IsString()
  song: string;

  @IsNotEmpty()
  @IsString()
  artist: string;
}
