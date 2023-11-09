import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateSongDto {
  @IsNotEmpty()
  @IsString()
  song: string;

  @IsNotEmpty()
  @IsString()
  artist: string;

  @Transform(({ value }) => value === 'true')
  @IsBoolean()
  isVisible: boolean;
}
