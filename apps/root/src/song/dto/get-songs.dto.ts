import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class GetSongsDto {
  @Transform(({ value }: { value: string }) => parseInt(value, 10))
  @IsNumber()
  @Min(1)
  page: number;

  @Transform(({ value }: { value: string }) => parseInt(value, 10))
  @IsNumber()
  @Min(1)
  perPage: number;

  @IsOptional()
  @IsString()
  q: string;

  @IsOptional()
  @IsBoolean()
  @Transform(({ value }) => value === 'true')
  visible: boolean;
}
