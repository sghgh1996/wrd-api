import { IsOptional, IsString, IsDate, IsNumber } from 'class-validator';

export class UpdateTravelDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsDate()
  departureDate?: Date;

  @IsOptional()
  @IsDate()
  returnDate?: Date;

  @IsOptional()
  @IsString()
  imageUrl?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  price?: number;
}
